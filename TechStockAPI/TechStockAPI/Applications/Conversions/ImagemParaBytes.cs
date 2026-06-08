namespace TechStockAPI.Applications.Conversions
{
    public class ImagemParaBytes
    {
        public static byte[] ConverterImagemParaBytes(IFormFile imagem)
        {
            using var ms = new MemoryStream();
            imagem.CopyTo(ms);
            return ms.ToArray();
        }
    }
}
