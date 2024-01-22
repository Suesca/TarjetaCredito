using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;

namespace FBTarjeta
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Añadir servicios al contenedor.
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddDbContext<AplicationDbContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DevConnection")));

            // Configuración de CORS
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowWebApp",
                    builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            });

            var app = builder.Build();

            // Configurar el pipeline de solicitudes HTTP.

            // Configuración de CORS
            app.UseCors("AllowWebApp");

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();

            app.Run();
        }
    }
}
