
function InsightCenterAccountConstructor(fullName,username,password,gender,birthdate,location,mail,phoneNumber,parentornot){
   this.name = fullName;
   this.username = username;
   this.location = location;
   this.password =password;
   this.birthdate = birthdate;
   this.email = mail;
   this.phoneNumber = int(phoneNumber);
   this.id=IdGen;
   this.gender = gender;
   this.parent= parentornot;
   this.creationDate = String(Date());
};
function IdGen(){
   return Math.random(0,100);
};

function Dupestercheck(){};
usersDumsper.push(new InsightCenterAccountConstructor("H.Mohamed","H.Mohamed","2010/09/24","Djelfa","hedibi.mohamed.elhabib@outook.com","0555832603",));
console.log(usersDumsper);

