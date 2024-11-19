using MySql.Data.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BlogWebsite.Models
{
    [DbConfigurationType(typeof(MySqlEFConfiguration))]

    public class BlogContext : DbContext
    {
        static BlogContext()
        {
            Database.SetInitializer<BlogContext>(null);
        }

        public BlogContext() : base("Name=blogdb")
        {

        }

        public virtual DbSet<UsersModel> users { get; set; }
        public virtual DbSet<PostsModel> posts { get; set; }
        public virtual DbSet<CommentsModel> comments { get; set; }
        public virtual DbSet<LikesModel> likes { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Configurations.Add(new UsersMap());
            modelBuilder.Configurations.Add(new PostsMap());
            modelBuilder.Configurations.Add(new CommentsMap());
            modelBuilder.Configurations.Add(new LikesMap());
        }
    }
}