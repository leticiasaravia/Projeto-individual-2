-- Adiciona a coluna status se ela não existir
DO $$ 
BEGIN 
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'tasks' 
        AND column_name = 'status'
    ) THEN
        ALTER TABLE tasks 
        ADD COLUMN status VARCHAR(20) NOT NULL DEFAULT 'pendente';
    END IF;
END $$; 