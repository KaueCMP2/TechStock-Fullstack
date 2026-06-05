using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using TechStockAPI.Domains;

namespace TechStockAPI.Contexts;

public partial class TechStockDbContext : DbContext
{
    public TechStockDbContext()
    {
    }

    public TechStockDbContext(DbContextOptions<TechStockDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Produto> Produto { get; set; }

    public virtual DbSet<TipoUsuario> TipoUsuario { get; set; }

    public virtual DbSet<Usuario> Usuario { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS; Database=TechStockDb; Trusted_Connection=true; TrustServerCertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Produto>(entity =>
        {
            entity.HasKey(e => e.ProdutoId).HasName("PK__Produto__9C8800E37FAAA751");

            entity.Property(e => e.Nome).HasMaxLength(100);
            entity.Property(e => e.Preco).HasColumnType("decimal(10, 2)");

            entity.HasOne(d => d.Usuario).WithMany(p => p.Produto).HasForeignKey(d => d.UsuarioId);
        });

        modelBuilder.Entity<TipoUsuario>(entity =>
        {
            entity.HasKey(e => e.TipoId).HasName("PK__TipoUsua__97099EB7ADF6E62F");

            entity.HasIndex(e => e.NomeTipo, "UQ__TipoUsua__7859A10AAB1EA0CE").IsUnique();

            entity.Property(e => e.NomeTipo)
                .HasMaxLength(40)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.UsuarioId).HasName("PK__Usuario__2B3DE7B811745434");

            entity.HasIndex(e => e.Email, "UQ__Usuario__A9D1053433D096C6").IsUnique();

            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.NomeUsuario).HasMaxLength(100);
            entity.Property(e => e.Senha).HasMaxLength(32);

            entity.HasOne(d => d.Tipo).WithMany(p => p.Usuario).HasForeignKey(d => d.TipoId);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
