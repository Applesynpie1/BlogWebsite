using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlogWebsite.Models
{
    public class LikesModel
    {
        public int likeID { get; set; }

        public int userID { get; set; }

        public int postID { get; set; }

        public DateTime createAt { get; set; }
    }
}