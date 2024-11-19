using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace BlogWebsite.Models
{
    public class UsersModel
    {
        public int userID { get; set; }
        public string username { get; set; }

        public string email { get; set; }

        public string password { get; set; }

        public int phoneNum { get; set; }

        public DateTime birthday { get; set; }

        public string profilepic { get; set; }

        public string bio { get; set; }

        public string role { get; set; }

        public string otpstatus { get; set; }

        public string otp { get; set; }

        public DateTime createAt { get; set; }

        public DateTime updateAt { get; set; }
    }
}