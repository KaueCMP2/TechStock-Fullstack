using System.Security.Cryptography;
using System.Text;

namespace TechStockAPI.Applications.Autentification
{
    public class SenhaParaHash
    {
        public static byte[] ConverterSenhaHash(string senha)
        {
            using (SHA256 sha256 = SHA256.Create())
            {
                byte[] bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(senha));

                return bytes;
            }
        }
    }
}
