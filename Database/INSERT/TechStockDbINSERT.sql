USE TechStockDb
GO

INSERT INTO TipoUsuario (NomeTipo)
VALUES
('Admin'),
('Responsavel')
GO

SELECT * FROM TipoUsuario
GO

INSERT INTO Usuario(NomeUsuario, Email, Senha, DataNascimento, TipoId)
VALUES
('Admin', 'a@a.email.com', HASHBYTES('SHA2_256', '123'), '02-02-2002', 100),
('Kaue', 'k@a.email.com', HASHBYTES('SHA2_256', '123'), '01-01-2001', 110)
GO

SELECT * FROM Usuario
GO

INSERT INTO Produto (Nome, Descricao, Imagem, Preco, Quantidade, UsuarioId)
VALUES
('Notebook Dell Inspiron 15', 'Notebook Intel i7 16GB SSD 512GB', 0x, 4899.90, 12, 1040),
('MacBook Air M3', 'Notebook Apple chip M3 13 polegadas', 0x, 8999.90, 5, 1040),
('Monitor LG UltraWide 29', 'Monitor ultrawide Full HD', 0x, 1299.99, 10, 1040),
('Mouse Logitech G502', 'Mouse gamer RGB alta precisão', 0x, 299.90, 30, 1040),
('Teclado Mecânico Redragon', 'Teclado mecânico RGB ABNT2', 0x, 349.90, 20, 1040),

('SSD Kingston NV2 1TB', 'SSD NVMe PCIe Gen4', 0x, 459.99, 25, 1040),
('Memória RAM Corsair 16GB', 'DDR5 5600MHz', 0x, 419.90, 18, 1040),
('Placa de Vídeo RTX 4070', 'GPU NVIDIA 12GB GDDR6X', 0x, 4399.90, 7, 1040),
('Processador Ryzen 7 7800X3D', 'AMD AM5 alto desempenho', 0x, 2599.90, 9, 1040),
('Placa Mãe ASUS B650', 'Socket AM5 DDR5', 0x, 1599.90, 14, 1040),

('iPhone 16 Pro', 'Smartphone Apple 256GB', 0x, 8999.00, 8, 1040),
('Samsung Galaxy S26', 'Smartphone Android premium', 0x, 6999.00, 11, 1040),
('iPad Air', 'Tablet Apple 10.9 polegadas', 0x, 5599.90, 6, 1040),
('Galaxy Tab S10', 'Tablet Samsung AMOLED', 0x, 4999.90, 9, 1040),
('Kindle Paperwhite', 'Leitor digital com iluminação', 0x, 799.90, 15, 1040),

('AirPods Pro', 'Fone Bluetooth cancelamento de ruído', 0x, 1999.90, 16, 1040),
('Headset HyperX Cloud III', 'Headset gamer', 0x, 699.90, 13, 1040),
('Caixa JBL Charge 6', 'Caixa de som portátil', 0x, 999.90, 17, 1040),
('Webcam Logitech C920', 'Webcam Full HD', 0x, 499.90, 21, 1040),
('Echo Dot 5', 'Assistente virtual Alexa', 0x, 349.90, 22, 1040),

('Apple Watch Series 11', 'Smartwatch Apple', 0x, 4299.90, 5, 1040),
('Galaxy Watch Ultra', 'Smartwatch Samsung', 0x, 2999.90, 7, 1040),
('Roteador TP-Link AX3000', 'Wi-Fi 6 alta velocidade', 0x, 599.90, 12, 1040),
('HD Externo Seagate 2TB', 'Armazenamento portátil USB 3.0', 0x, 529.90, 19, 1040);

SELECT * FROM Produto
GO