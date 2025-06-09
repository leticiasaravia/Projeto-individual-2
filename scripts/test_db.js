require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false
});

async function testConnection() {
    console.log('🔍 Verificando configurações do banco de dados...');
    console.log('Configurações encontradas:');
    console.log(`Host: ${process.env.DB_HOST}`);
    console.log(`Porta: ${process.env.DB_PORT}`);
    console.log(`Banco: ${process.env.DB_DATABASE}`);
    console.log(`Usuário: ${process.env.DB_USER}`);
    console.log('Senha: ****');
    
    try {
        console.log('\n📡 Tentando conectar ao banco de dados...');
        const client = await pool.connect();
        console.log('✅ Conexão estabelecida com sucesso!');
        
        console.log('\n🔍 Verificando a tabela tasks...');
        const result = await client.query('SELECT COUNT(*) FROM tasks');
        console.log(`✅ Tabela tasks encontrada! Número de registros: ${result.rows[0].count}`);
        
        client.release();
        console.log('\n🎉 Tudo pronto! O banco de dados está configurado corretamente.');
    } catch (error) {
        console.error('\n❌ Erro ao conectar com o banco de dados:');
        console.error(error.message);
        console.log('\n🔍 Possíveis soluções:');
        console.log('1. Verifique se o PostgreSQL está instalado e rodando');
        console.log('2. Confira se as configurações no arquivo .env estão corretas');
        console.log('3. Verifique se o banco de dados foi criado');
        console.log('4. Confirme se o usuário e senha estão corretos');
        
        if (error.message.includes('does not exist')) {
            console.log('\n💡 Parece que o banco de dados ou a tabela não existe.');
            console.log('Execute o script SQL de criação do banco:');
            console.log('psql -U postgres -f scripts/create_database.sql');
        }
        
        if (error.message.includes('password authentication failed')) {
            console.log('\n💡 Erro de autenticação. Verifique:');
            console.log('1. Se a senha no arquivo .env está correta');
            console.log('2. Se o usuário tem permissão para acessar o banco');
        }
    } finally {
        await pool.end();
    }
}

testConnection(); 