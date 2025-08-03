using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence;
//Constructor primario para AppDbContext que recibe opciones de configuración
//como la cadena de conexión a la base de datos
// y las pasa al constructor base de DbContext.
public class AppDbContext(DbContextOptions options) : DbContext(options)
{

    public required DbSet<Activity> Activities { get; set; }

}
