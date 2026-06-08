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
('Notebook Dell Inspiron 15', 'Notebook Intel i7 16GB SSD 512GB', 0x, 4899.90, 12, 1000),
('MacBook Air M3', 'Notebook Apple chip M3 13 polegadas', 0x, 8999.90, 5, 1000),
('Monitor LG UltraWide 29', 'Monitor ultrawide Full HD', 0x, 1299.99, 10, 1000),
('Mouse Logitech G502', 'Mouse gamer RGB alta precisão', 0x, 299.90, 30, 1000),
('Teclado Mecânico Redragon', 'Teclado mecânico RGB ABNT2', 0x, 349.90, 20, 1000),

('SSD Kingston NV2 1TB', 'SSD NVMe PCIe Gen4', 0x, 459.99, 25, 1000),
('Memória RAM Corsair 16GB', 'DDR5 5600MHz', 0x, 419.90, 18, 1000),
('Placa de Vídeo RTX 4070', 'GPU NVIDIA 12GB GDDR6X', 0x, 4399.90, 7, 1000),
('Processador Ryzen 7 7800X3D', 'AMD AM5 alto desempenho', 0x, 2599.90, 9, 1000),
('Placa Mãe ASUS B650', 'Socket AM5 DDR5', 0x, 1599.90, 14, 1000),

('iPhone 16 Pro', 'Smartphone Apple 256GB', 0x, 8999.00, 8, 1000),
('Samsung Galaxy S26', 'Smartphone Android premium', 0x, 6999.00, 11, 1000),
('iPad Air', 'Tablet Apple 10.9 polegadas', 0x, 5599.90, 6, 1000),
('Galaxy Tab S10', 'Tablet Samsung AMOLED', 0x, 4999.90, 9, 1000),
('Kindle Paperwhite', 'Leitor digital com iluminação', 0x, 799.90, 15, 1000),

('AirPods Pro', 'Fone Bluetooth cancelamento de ruído', 0x, 1999.90, 16, 1000),
('Headset HyperX Cloud III', 'Headset gamer', 0x, 699.90, 13, 1000),
('Caixa JBL Charge 6', 'Caixa de som portátil', 0x, 999.90, 17, 1000),
('Webcam Logitech C920', 'Webcam Full HD', 0x, 499.90, 21, 1000),
('Echo Dot 5', 'Assistente virtual Alexa', 0x, 349.90, 22, 1000),

('Apple Watch Series 11', 'Smartwatch Apple', 0x, 4299.90, 5, 1000),
('Galaxy Watch Ultra', 'Smartwatch Samsung', 0x, 2999.90, 7, 1000),
('Roteador TP-Link AX3000', 'Wi-Fi 6 alta velocidade', 0x, 599.90, 12, 1000),
('HD Externo Seagate 2TB', 'Armazenamento portátil USB 3.0', 0x, 529.90, 19, 1000);

SELECT * FROM Produto
GO