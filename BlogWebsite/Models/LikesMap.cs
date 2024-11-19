using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace BlogWebsite.Models
{
    public class LikesMap : EntityTypeConfiguration<LikesModel>
    {
        public LikesMap()
        {
            HasKey(i => i.likeID);
            ToTable("likes");
        }
    }
}