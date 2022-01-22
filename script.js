var statename={
    AN:"Andaman",
    AP: "Andhra Pradesh",
    AR: "Arunachal Pradesh", 	
    AS: "Assam", 	
    BR: "Bihar" ,
    CH: "Chandigarh",	
    CT: "Chattisgarh",
    DL: "Delhi",
    DN: " Dadra and Nagar Haveli", 	
    GA: "Goa", 	
    GJ: "Gujarat",
    HP: "Himachal Pradesh", 	
    HR: "Haryana",
    JH: "Jharkhand",
    JK: "Jammu and Kashmir",	
    KA: "Karnataka", 	
    KL: "Kerala", 
    LA: "",	
 	LD: "Lakshadweep Islands", 	
 	MH: "Maharashtra", 	
 	ML: "Meghalaya", 	
 	MN: "Manipur", 	
 	MP: "Madhya Pradesh",	
 	MZ: "Mizoram", 	
 	NL: "Nagaland", 	
 	OR: "Odisha", 	
 	PB: "Punjab", 	
 	PY: "Pondicherry",
 	RJ: "Rajasthan", 	
 	SK: "Sikkim",
    TG: "Telangana ", 	
 	TN: "Tamil Nadu", 		
 	TR: "Tripura",
    TT: "TT", 	
 	UP: "Uttar Pradesh",	
 	UK: "Uttarakhand", 	
 	WB: "West Bengal" 	
};


async function state(){
    try {
        var id= document.getElementById("code").value;
        var res=await fetch("https://data.covid19india.org/v4/min/data.min.json");
        var result=await res.json();
        var sta=result[id].total;
        console.log(sta);
        // Table datas

        document.getElementById("thed").innerHTML= statename[id];
        document.getElementById("confi").innerHTML= result[id].total.confirmed ;
        document.getElementById("dece").innerHTML= result[id].total.deceased;
        document.getElementById("reco").innerHTML= result[id].total.recovered;
        document.getElementById("tes").innerHTML= result[id].total.tested;
        document.getElementById("vac1").innerHTML= result[id].total.vaccinated1;
        document.getElementById("vac2").innerHTML= result[id].total.vaccinated2;
    
    } catch (error) {
        alert("Please Enter Valid State Code");
    }
}



