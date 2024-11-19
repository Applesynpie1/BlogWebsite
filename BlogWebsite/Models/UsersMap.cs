using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace BlogWebsite.Models
{
    public class UsersMap : EntityTypeConfiguration<UsersModel>
    {
        public UsersMap()
        {
            HasKey(i => i.userID);
            ToTable("users");
        }
    }
}