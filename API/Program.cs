using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args); // aqui se crea el builder para configurar la aplicación

// Add services to the container.

builder.Services.AddControllers(); //aqui se añaden los servicios necesarios para el controlador
builder.Services.AddDbContext<AppDbContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

var app = builder.Build(); // aqui se construye la aplicación con los servicios configurados



app.MapControllers(); // aqui se mapean los controladores para que puedan ser accedidos


//Patron localizador de servicios
using var scope = app.Services.CreateScope(); // aqui se crea un scope para el contexto de la base de datos
var services = scope.ServiceProvider; // aqui se obtiene el proveedor de servicios del scope
try
{
    var context = services.GetRequiredService<AppDbContext>(); // aqui se obtiene el contexto de la base de datos
    await context.Database.MigrateAsync(); // aqui se aplica la migración a la base de datos
    await DbInitializer.SeedData(context); // aqui se inicializa la base de datos con datos de prueba
}
catch (Exception ex)
{
    var logger= services.GetRequiredService<ILogger<Program>>(); // aqui se obtiene el logger para registrar errores
    logger.LogError(ex, "Un error ocurrio durante la migracion a la base de datos");
    
}


app.Run();
 