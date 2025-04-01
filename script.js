const transportationData = [
    // Amaravati to Itanagar (Arunachal Pradesh)
    { source: "Amaravati", destination: "Itanagar", transportation: "Flight", duration: "5 hours", cost: "₹6,500" },
    
    // Amaravati to Dispur (Assam)
    { source: "Amaravati", destination: "Dispur", transportation: "Flight", duration: "3.5 hours", cost: "₹5,000" },
    
    // Amaravati to Patna (Bihar)
    { source: "Amaravati", destination: "Patna", transportation: "Train", duration: "18 hours", cost: "₹1,500" },
    { source: "Amaravati", destination: "Patna", transportation: "Flight", duration: "2.5 hours", cost: "₹3,800" },
    
    // Amaravati to Visakhapatnam (Andhra Pradesh)
    { source: "Amaravati", destination: "Visakhapatnam", transportation: "Train", duration: "10 hours", cost: "₹1,000" },
    { source: "Amaravati", destination: "Visakhapatnam", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },

    // Chhattisgarh
    { source: "Amaravati", destination: "Raipur", transportation: "Train", duration: "10 hours", cost: "₹700" },
    { source: "Amaravati", destination: "Raipur", transportation: "Bus", duration: "12 hours", cost: "₹800" },
    { source: "Amaravati", destination: "Raipur", transportation: "Flight", duration: "1.5 hours", cost: "₹2500" },

    // Goa
    { source: "Amaravati", destination: "Panaji", transportation: "Train", duration: "14 hours", cost: "₹1000" },
    { source: "Amaravati", destination: "Panaji", transportation: "Bus", duration: "16 hours", cost: "₹1200" },
    { source: "Amaravati", destination: "Panaji", transportation: "Flight", duration: "2 hours", cost: "₹3000" },

    // Gujarat
    { source: "Amaravati", destination: "Gandhinagar", transportation: "Train", duration: "18 hours", cost: "₹1500" },
    { source: "Amaravati", destination: "Gandhinagar", transportation: "Bus", duration: "20 hours", cost: "₹1800" },
    { source: "Amaravati", destination: "Gandhinagar", transportation: "Flight", duration: "2.5 hours", cost: "₹3500" },

    // Haryana
    { source: "Amaravati", destination: "Chandigarh", transportation: "Train", duration: "22 hours", cost: "₹1800" },
    { source: "Amaravati", destination: "Chandigarh", transportation: "Bus", duration: "24 hours", cost: "₹2000" },
    { source: "Amaravati", destination: "Chandigarh", transportation: "Flight", duration: "3 hours", cost: "₹4000" },

    // Himachal Pradesh
    { source: "Amaravati", destination: "Shimla", transportation: "Bus", duration: "30 hours", cost: "₹2200" },
    { source: "Amaravati", destination: "Shimla", transportation: "Train", duration: "28 hours", cost: "₹2000" },
    { source: "Amaravati", destination: "Shimla", transportation: "Flight", duration: "4 hours", cost: "₹5000" },

    // Jharkhand
    { source: "Amaravati", destination: "Ranchi", transportation: "Bus", duration: "26 hours", cost: "₹1800" },
    { source: "Amaravati", destination: "Ranchi", transportation: "Train", duration: "24 hours", cost: "₹1600" },
    { source: "Amaravati", destination: "Ranchi", transportation: "Flight", duration: "3 hours", cost: "₹4500" },

    // Karnataka
    { source: "Amaravati", destination: "Bengaluru", transportation: "Bus", duration: "16 hours", cost: "₹1200" },
    { source: "Amaravati", destination: "Bengaluru", transportation: "Train", duration: "14 hours", cost: "₹1000" },
    { source: "Amaravati", destination: "Bengaluru", transportation: "Flight", duration: "2 hours", cost: "₹4000" },

    // Kerala
    { source: "Amaravati", destination: "Thiruvananthapuram", transportation: "Bus", duration: "22 hours", cost: "₹1600" },
    { source: "Amaravati", destination: "Thiruvananthapuram", transportation: "Train", duration: "20 hours", cost: "₹1400" },
    { source: "Amaravati", destination: "Thiruvananthapuram", transportation: "Flight", duration: "3 hours", cost: "₹4800" },

    // Madhya Pradesh
    { source: "Amaravati", destination: "Bhopal", transportation: "Train", duration: "10 hours", cost: "₹800" },
    { source: "Amaravati", destination: "Bhopal", transportation: "Bus", duration: "12 hours", cost: "₹700" },

    // Maharashtra
    { source: "Amaravati", destination: "Mumbai", transportation: "Flight", duration: "1.5 hours", cost: "₹2500" },
    { source: "Amaravati", destination: "Mumbai", transportation: "Train", duration: "8 hours", cost: "₹600" },
    { source: "Amaravati", destination: "Mumbai", transportation: "Bus", duration: "10 hours", cost: "₹550" },

    // Manipur
    { source: "Amaravati", destination: "Imphal", transportation: "Flight", duration: "3.5 hours", cost: "₹4000" },
    
    // Meghalaya
    { source: "Amaravati", destination: "Shillong", transportation: "Flight", duration: "4 hours", cost: "₹4500" },
    
    // Mizoram
    { source: "Amaravati", destination: "Aizawl", transportation: "Flight", duration: "3.5 hours", cost: "₹4200" },
    
    // Nagaland
    { source: "Amaravati", destination: "Kohima", transportation: "Flight", duration: "4 hours", cost: "₹4600" },
    
    // Odisha
    { source: "Amaravati", destination: "Bhubaneswar", transportation: "Flight", duration: "2.5 hours", cost: "₹2800" },
    { source: "Amaravati", destination: "Bhubaneswar", transportation: "Train", duration: "16 hours", cost: "₹1000" },
    { source: "Amaravati", destination: "Bhubaneswar", transportation: "Bus", duration: "18 hours", cost: "₹900" },

    // Punjab
    { source: "Amaravati", destination: "Chandigarh", transportation: "Flight", duration: "3 hours", cost: "₹3500" },
    { source: "Amaravati", destination: "Chandigarh", transportation: "Train", duration: "22 hours", cost: "₹1800" },
    
    // Rajasthan
    { source: "Amaravati", destination: "Jaipur", transportation: "Flight", duration: "3 hours", cost: "₹3200" },
    { source: "Amaravati", destination: "Jaipur", transportation: "Train", duration: "20 hours", cost: "₹1500" },
    
    // Sikkim
    { source: "Amaravati", destination: "Gangtok", transportation: "Flight", duration: "5 hours", cost: "₹5000" },

    // Amaravati to Tamil Nadu
    { source: "Amaravati", destination: "Chennai", transportation: "Flight", duration: "1.5 hours", cost: "₹2500" },
    { source: "Amaravati", destination: "Chennai", transportation: "Train", duration: "10 hours", cost: "₹1200" },
    { source: "Amaravati", destination: "Chennai", transportation: "Bus", duration: "12 hours", cost: "₹1000" },

    // Amaravati to Telangana
    { source: "Amaravati", destination: "Hyderabad", transportation: "Flight", duration: "1 hour", cost: "₹2000" },
    { source: "Amaravati", destination: "Hyderabad", transportation: "Train", duration: "6 hours", cost: "₹800" },
    { source: "Amaravati", destination: "Hyderabad", transportation: "Bus", duration: "8 hours", cost: "₹600" },

    // Amaravati to Tripura
    { source: "Amaravati", destination: "Agartala", transportation: "Flight", duration: "3.5 hours", cost: "₹4000" },
    { source: "Amaravati", destination: "Agartala", transportation: "Train", duration: "36 hours", cost: "₹2000" },

    // Amaravati to Uttar Pradesh
    { source: "Amaravati", destination: "Lucknow", transportation: "Flight", duration: "2.5 hours", cost: "₹3000" },
    { source: "Amaravati", destination: "Lucknow", transportation: "Train", duration: "18 hours", cost: "₹1500" },
    { source: "Amaravati", destination: "Lucknow", transportation: "Bus", duration: "20 hours", cost: "₹1200" },

    // Amaravati to Uttarakhand
    { source: "Amaravati", destination: "Dehradun", transportation: "Flight", duration: "3 hours", cost: "₹3500" },
    { source: "Amaravati", destination: "Dehradun", transportation: "Train", duration: "22 hours", cost: "₹1800" },
    { source: "Amaravati", destination: "Dehradun", transportation: "Bus", duration: "24 hours", cost: "₹1500" },

    // Amaravati to West Bengal
    { source: "Amaravati", destination: "Kolkata", transportation: "Flight", duration: "2.5 hours", cost: "₹2800" },
    { source: "Amaravati", destination: "Kolkata", transportation: "Train", duration: "20 hours", cost: "₹1600" },
    { source: "Amaravati", destination: "Kolkata", transportation: "Bus", duration: "22 hours", cost: "₹1400" },

     // Amaravati to Port Blair (Andaman and Nicobar Islands)
    { source: "Amaravati", destination: "Port Blair", transportation: "Flight", duration: "12 hours", cost: "₹9,000" },

    // Amaravati to Chandigarh (Chandigarh)
    { source: "Amaravati", destination: "Chandigarh", transportation: "Train", duration: "24.5 hours", cost: "₹2,200" },
    { source: "Amaravati", destination: "Chandigarh", transportation: "Flight", duration: "9 hours", cost: "₹6,500" },

    // Amaravati to Daman (Dadra and Nagar Haveli and Daman and Diu)
    { source: "Amaravati", destination: "Daman", transportation: "Train", duration: "12.5 hours", cost: "₹1,500" },
    { source: "Amaravati", destination: "Daman", transportation: "Bus", duration: "16.5 hours", cost: "₹1,200" },
    { source: "Amaravati", destination: "Daman", transportation: "Car", duration: "12 hours", cost: "₹6,000" },

    // Amaravati to Kavaratti (Lakshadweep)
    { source: "Amaravati", destination: "Kavaratti", transportation: "Flight", duration: "5 hours", cost: "₹7,000" },
    { source: "Amaravati", destination: "Kavaratti", transportation: "Ship", duration: "14-18 hours", cost: "₹3,000" },

    // Amaravati to New Delhi (Delhi)
    { source: "Amaravati", destination: "New Delhi", transportation: "Train", duration: "24 hours", cost: "₹2,500" },
    { source: "Amaravati", destination: "New Delhi", transportation: "Flight", duration: "8 hours", cost: "₹7,500" },

    // Amaravati to Puducherry (Puducherry)
    { source: "Amaravati", destination: "Puducherry", transportation: "Train", duration: "26 hours", cost: "₹2,000" },
    { source: "Amaravati", destination: "Puducherry", transportation: "Bus", duration: "29 hours", cost: "₹1,800" },
    { source: "Amaravati", destination: "Puducherry", transportation: "Flight", duration: "9 hours", cost: "₹6,000" },

    // Amaravati to Srinagar (Jammu and Kashmir)
    { source: "Amaravati", destination: "Srinagar", transportation: "Train", duration: "35 hours", cost: "₹3,000" },
    { source: "Amaravati", destination: "Srinagar", transportation: "Flight", duration: "17 hours", cost: "₹8,000" },

    // Amaravati to Leh (Ladakh)
    { source: "Amaravati", destination: "Leh", transportation: "Flight", duration: "9 hours", cost: "₹9,000" },

    // Itanagar to Amaravati
    { source: "Itanagar", destination: "Amaravati", transportation: "Flight", duration: "4.5 hours", cost: "₹7,500" },

    // Itanagar to Dispur
    { source: "Itanagar", destination: "Dispur", transportation: "Bus", duration: "5 hours", cost: "₹500" },
    { source: "Itanagar", destination: "Dispur", transportation: "Train", duration: "4 hours", cost: "₹400" },

    // Itanagar to Patna
    { source: "Itanagar", destination: "Patna", transportation: "Train", duration: "18 hours", cost: "₹1,800" },
    { source: "Itanagar", destination: "Patna", transportation: "Flight", duration: "3.5 hours", cost: "₹6,000" },

    // Itanagar to Raipur
    { source: "Itanagar", destination: "Raipur", transportation: "Train", duration: "20 hours", cost: "₹2,000" },
    { source: "Itanagar", destination: "Raipur", transportation: "Flight", duration: "4 hours", cost: "₹6,500" },

    // Itanagar to Panaji
    { source: "Itanagar", destination: "Panaji", transportation: "Flight", duration: "5.5 hours", cost: "₹8,000" },

    // Itanagar to Gandhinagar
    { source: "Itanagar", destination: "Gandhinagar", transportation: "Flight", duration: "5 hours", cost: "₹7,500" },

    // Itanagar to Chandigarh
    { source: "Itanagar", destination: "Chandigarh", transportation: "Train", duration: "24 hours", cost: "₹2,500" },
    { source: "Itanagar", destination: "Chandigarh", transportation: "Flight", duration: "4.5 hours", cost: "₹7,000" },

    // Itanagar to Shimla
    { source: "Itanagar", destination: "Shimla", transportation: "Train", duration: "26 hours", cost: "₹2,800" },
    { source: "Itanagar", destination: "Shimla", transportation: "Flight", duration: "5 hours", cost: "₹7,500" },

    // Itanagar to Ranchi
    { source: "Itanagar", destination: "Ranchi", transportation: "Train", duration: "20 hours", cost: "₹2,000" },
    { source: "Itanagar", destination: "Ranchi", transportation: "Flight", duration: "4 hours", cost: "₹6,500" },

    // Itanagar to Bengaluru
    { source: "Itanagar", destination: "Bengaluru", transportation: "Flight", duration: "4.5 hours", cost: "₹7,500" },
    { source: "Itanagar", destination: "Bengaluru", transportation: "Train", duration: "48 hours", cost: "₹2,800" },

    // Itanagar to Thiruvananthapuram
    { source: "Itanagar", destination: "Thiruvananthapuram", transportation: "Flight", duration: "5 hours", cost: "₹8,000" },
    { source: "Itanagar", destination: "Thiruvananthapuram", transportation: "Train", duration: "50 hours", cost: "₹3,000" },

    // Itanagar to Bhopal
    { source: "Itanagar", destination: "Bhopal", transportation: "Flight", duration: "4 hours", cost: "₹6,500" },
    { source: "Itanagar", destination: "Bhopal", transportation: "Train", duration: "40 hours", cost: "₹2,500" },

    // Itanagar to Mumbai
    { source: "Itanagar", destination: "Mumbai", transportation: "Flight", duration: "4.5 hours", cost: "₹7,000" },
    { source: "Itanagar", destination: "Mumbai", transportation: "Train", duration: "45 hours", cost: "₹2,700" },

    // Itanagar to Imphal
    { source: "Itanagar", destination: "Imphal", transportation: "Bus", duration: "12 hours", cost: "₹1,200" },
    { source: "Itanagar", destination: "Imphal", transportation: "Train", duration: "14 hours", cost: "₹1,000" },

    // Itanagar to Shillong
    { source: "Itanagar", destination: "Shillong", transportation: "Bus", duration: "10 hours", cost: "₹1,000" },
    { source: "Itanagar", destination: "Shillong", transportation: "Train", duration: "12 hours", cost: "₹900" },

    // Itanagar to Aizawl
    { source: "Itanagar", destination: "Aizawl", transportation: "Bus", duration: "14 hours", cost: "₹1,500" },
    { source: "Itanagar", destination: "Aizawl", transportation: "Train", duration: "16 hours", cost: "₹1,200" },

    // Itanagar to Kohima
    { source: "Itanagar", destination: "Kohima", transportation: "Bus", duration: "8 hours", cost: "₹800" },
    { source: "Itanagar", destination: "Kohima", transportation: "Train", duration: "10 hours", cost: "₹700" },

    // Itanagar to Bhubaneswar
    { source: "Itanagar", destination: "Bhubaneswar", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },
    { source: "Itanagar", destination: "Bhubaneswar", transportation: "Train", duration: "36 hours", cost: "₹2,300" },

    // Itanagar to Chandigarh
    { source: "Itanagar", destination: "Chandigarh", transportation: "Flight", duration: "5 hours", cost: "₹7,500" },
    { source: "Itanagar", destination: "Chandigarh", transportation: "Train", duration: "42 hours", cost: "₹2,600" },

    // Itanagar to Jaipur
    { source: "Itanagar", destination: "Jaipur", transportation: "Flight", duration: "5 hours", cost: "₹7,800" },
    { source: "Itanagar", destination: "Jaipur", transportation: "Train", duration: "44 hours", cost: "₹2,700" },

    // Itanagar to Gangtok
    { source: "Itanagar", destination: "Gangtok", transportation: "Bus", duration: "12 hours", cost: "₹1,200" },
    { source: "Itanagar", destination: "Gangtok", transportation: "Train", duration: "14 hours", cost: "₹1,000" },

    // Itanagar to Chennai
    { source: "Itanagar", destination: "Chennai", transportation: "Flight", duration: "5 hours", cost: "₹8,000" },
    { source: "Itanagar", destination: "Chennai", transportation: "Train", duration: "48 hours", cost: "₹2,900" },

    // Itanagar to Hyderabad
    { source: "Itanagar", destination: "Hyderabad", transportation: "Flight", duration: "4.5 hours", cost: "₹7,200" },
    { source: "Itanagar", destination: "Hyderabad", transportation: "Train", duration: "46 hours", cost: "₹2,800" },

    // Itanagar to Agartala
    { source: "Itanagar", destination: "Agartala", transportation: "Bus", duration: "14 hours", cost: "₹1,500" },
    { source: "Itanagar", destination: "Agartala", transportation: "Train", duration: "16 hours", cost: "₹1,200" },

    // Itanagar to Lucknow
    { source: "Itanagar", destination: "Lucknow", transportation: "Flight", duration: "4 hours", cost: "₹6,500" },
    { source: "Itanagar", destination: "Lucknow", transportation: "Train", duration: "38 hours", cost: "₹2,400" },

    // Itanagar to Dehradun
    { source: "Itanagar", destination: "Dehradun", transportation: "Flight", duration: "4.5 hours", cost: "₹7,000" },
    { source: "Itanagar", destination: "Dehradun", transportation: "Train", duration: "40 hours", cost: "₹2,500" },

    // Itanagar to Kolkata
    { source: "Itanagar", destination: "Kolkata", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },
    { source: "Itanagar", destination: "Kolkata", transportation: "Train", duration: "30 hours", cost: "₹2,000" },

     // Itanagar to Port Blair
    { source: "Itanagar", destination: "Port Blair", transportation: "Flight", duration: "9.5 hours", cost: "₹10,000" },

    // Itanagar to Chandigarh
    { source: "Itanagar", destination: "Chandigarh", transportation: "Train", duration: "36 hours", cost: "₹2,500" },
    { source: "Itanagar", destination: "Chandigarh", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Itanagar to Daman
    { source: "Itanagar", destination: "Daman", transportation: "Train", duration: "48 hours", cost: "₹3,000" },
    { source: "Itanagar", destination: "Daman", transportation: "Flight", duration: "5 hours", cost: "₹7,500" },

    // Itanagar to Kavaratti
    { source: "Itanagar", destination: "Kavaratti", transportation: "Flight", duration: "10 hours", cost: "₹12,000" },

    // Itanagar to Delhi
    { source: "Itanagar", destination: "Delhi", transportation: "Train", duration: "40 hours", cost: "₹2,800" },
    { source: "Itanagar", destination: "Delhi", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Itanagar to Puducherry
    { source: "Itanagar", destination: "Puducherry", transportation: "Train", duration: "50 hours", cost: "₹3,200" },
    { source: "Itanagar", destination: "Puducherry", transportation: "Flight", duration: "6 hours", cost: "₹8,000" },

    // Itanagar to Srinagar
    { source: "Itanagar", destination: "Srinagar", transportation: "Train", duration: "42 hours", cost: "₹3,000" },
    { source: "Itanagar", destination: "Srinagar", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Itanagar to Leh
    { source: "Itanagar", destination: "Leh", transportation: "Flight", duration: "5 hours", cost: "₹7,000" },

    // Dispur to Amaravati
    { source: "Dispur", destination: "Amaravati", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Dispur to Itanagar
    { source: "Dispur", destination: "Itanagar", transportation: "Bus", duration: "6 hours", cost: "₹500" },

    // Dispur to Patna
    { source: "Dispur", destination: "Patna", transportation: "Train", duration: "16 hours", cost: "₹1,200" },
    { source: "Dispur", destination: "Patna", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },

    // Dispur to Raipur
    { source: "Dispur", destination: "Raipur", transportation: "Train", duration: "20 hours", cost: "₹1,500" },
    { source: "Dispur", destination: "Raipur", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Dispur to Panaji
    { source: "Dispur", destination: "Panaji", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Dispur to Gandhinagar
    { source: "Dispur", destination: "Gandhinagar", transportation: "Train", duration: "30 hours", cost: "₹2,000" },
    { source: "Dispur", destination: "Gandhinagar", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Dispur to Chandigarh
    { source: "Dispur", destination: "Chandigarh", transportation: "Train", duration: "28 hours", cost: "₹2,200" },
    { source: "Dispur", destination: "Chandigarh", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Dispur to Shimla
    { source: "Dispur", destination: "Shimla", transportation: "Train", duration: "30 hours", cost: "₹2,500" },
    { source: "Dispur", destination: "Shimla", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Dispur to Ranchi
    { source: "Dispur", destination: "Ranchi", transportation: "Train", duration: "18 hours", cost: "₹1,500" },
    { source: "Dispur", destination: "Ranchi", transportation: "Flight", duration: "2.5 hours", cost: "₹4,000" },

    // Dispur to Bengaluru
    { source: "Dispur", destination: "Bengaluru", transportation: "Train", duration: "36 hours", cost: "₹2,500" },
    { source: "Dispur", destination: "Bengaluru", transportation: "Flight", duration: "3.5 hours", cost: "₹6,000" },

    // Dispur to Thiruvananthapuram
    { source: "Dispur", destination: "Thiruvananthapuram", transportation: "Train", duration: "40 hours", cost: "₹2,800" },
    { source: "Dispur", destination: "Thiruvananthapuram", transportation: "Flight", duration: "4 hours", cost: "₹6,500" },

    // Dispur to Bhopal
    { source: "Dispur", destination: "Bhopal", transportation: "Train", duration: "24 hours", cost: "₹2,000" },
    { source: "Dispur", destination: "Bhopal", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Dispur to Mumbai
    { source: "Dispur", destination: "Mumbai", transportation: "Train", duration: "32 hours", cost: "₹2,500" },
    { source: "Dispur", destination: "Mumbai", transportation: "Flight", duration: "3.5 hours", cost: "₹6,000" },

    // Dispur to Imphal
    { source: "Dispur", destination: "Imphal", transportation: "Flight", duration: "1 hour", cost: "₹3,500" },
    { source: "Dispur", destination: "Imphal", transportation: "Bus", duration: "10 hours", cost: "₹800" },

    // Dispur to Shillong
    { source: "Dispur", destination: "Shillong", transportation: "Bus", duration: "2.5 hours", cost: "₹150" },
    { source: "Dispur", destination: "Shillong", transportation: "Taxi", duration: "2 hours", cost: "₹3,400" },

    // Dispur to Aizawl
    { source: "Dispur", destination: "Aizawl", transportation: "Flight", duration: "1.5 hours", cost: "₹4,000" },
    { source: "Dispur", destination: "Aizawl", transportation: "Bus", duration: "12 hours", cost: "₹1,000" },

    // Dispur to Kohima
    { source: "Dispur", destination: "Kohima", transportation: "Bus", duration: "8 hours", cost: "₹600" },
    { source: "Dispur", destination: "Kohima", transportation: "Taxi", duration: "7 hours", cost: "₹5,000" },

    // Dispur to Bhubaneswar
    { source: "Dispur", destination: "Bhubaneswar", transportation: "Flight", duration: "2 hours", cost: "₹5,500" },
    { source: "Dispur", destination: "Bhubaneswar", transportation: "Train", duration: "24 hours", cost: "₹1,800" },

    // Dispur to Chandigarh
    { source: "Dispur", destination: "Chandigarh", transportation: "Flight", duration: "3 hours", cost: "₹6,500" },
    { source: "Dispur", destination: "Chandigarh", transportation: "Train", duration: "36 hours", cost: "₹2,500" },

    // Dispur to Jaipur
    { source: "Dispur", destination: "Jaipur", transportation: "Flight", duration: "2.5 hours", cost: "₹6,000" },
    { source: "Dispur", destination: "Jaipur", transportation: "Train", duration: "30 hours", cost: "₹2,200" },

    // Dispur to Gangtok
    { source: "Dispur", destination: "Gangtok", transportation: "Bus", duration: "10 hours", cost: "₹700" },
    { source: "Dispur", destination: "Gangtok", transportation: "Taxi", duration: "9 hours", cost: "₹6,000" },

    // Dispur to Chennai
    { source: "Dispur", destination: "Chennai", transportation: "Flight", duration: "3 hours", cost: "₹7,000" },
    { source: "Dispur", destination: "Chennai", transportation: "Train", duration: "40 hours", cost: "₹3,000" },

    // Dispur to Hyderabad
    { source: "Dispur", destination: "Hyderabad", transportation: "Flight", duration: "2.5 hours", cost: "₹6,500" },
    { source: "Dispur", destination: "Hyderabad", transportation: "Train", duration: "36 hours", cost: "₹2,800" },

    // Dispur to Agartala
    { source: "Dispur", destination: "Agartala", transportation: "Flight", duration: "1 hour", cost: "₹3,000" },
    { source: "Dispur", destination: "Agartala", transportation: "Bus", duration: "12 hours", cost: "₹900" },

    // Dispur to Lucknow
    { source: "Dispur", destination: "Lucknow", transportation: "Flight", duration: "2 hours", cost: "₹5,500" },
    { source: "Dispur", destination: "Lucknow", transportation: "Train", duration: "28 hours", cost: "₹2,000" },

    // Dispur to Dehradun
    { source: "Dispur", destination: "Dehradun", transportation: "Flight", duration: "2.5 hours", cost: "₹6,000" },
    { source: "Dispur", destination: "Dehradun", transportation: "Train", duration: "32 hours", cost: "₹2,300" },

    // Dispur to Kolkata
    { source: "Dispur", destination: "Kolkata", transportation: "Flight", duration: "1.5 hours", cost: "₹4,500" },
    { source: "Dispur", destination: "Kolkata", transportation: "Train", duration: "18 hours", cost: "₹1,500" },

    // Dispur to Port Blair
    { source: "Dispur", destination: "Port Blair", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Dispur to Chandigarh
    { source: "Dispur", destination: "Chandigarh", transportation: "Flight", duration: "3 hours", cost: "₹5,500" },
    { source: "Dispur", destination: "Chandigarh", transportation: "Train", duration: "36 hours", cost: "₹2,000" },

    // Dispur to Daman
    { source: "Dispur", destination: "Daman", transportation: "Flight", duration: "4.5 hours", cost: "₹7,000" },
    { source: "Dispur", destination: "Daman", transportation: "Train", duration: "40 hours", cost: "₹2,200" },

    // Dispur to Delhi
    { source: "Dispur", destination: "Delhi", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },
    { source: "Dispur", destination: "Delhi", transportation: "Train", duration: "28 hours", cost: "₹1,800" },

    // Dispur to Srinagar
    { source: "Dispur", destination: "Srinagar", transportation: "Flight", duration: "3.5 hours", cost: "₹6,500" },
    { source: "Dispur", destination: "Srinagar", transportation: "Train", duration: "40 hours", cost: "₹2,500" },

    // Dispur to Kavaratti
    { source: "Dispur", destination: "Kavaratti", transportation: "Flight and Ship", duration: "6 hours", cost: "₹8,000" },

    // Dispur to Leh (Ladakh)
    { source: "Dispur", destination: "Leh (Ladakh)", transportation: "Flight", duration: "4 hours", cost: "₹7,000" },
    { source: "Dispur", destination: "Leh (Ladakh)", transportation: "Train and Bus", duration: "48 hours", cost: "₹3,000" },

    // Dispur to Puducherry
    { source: "Dispur", destination: "Puducherry", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },
    { source: "Dispur", destination: "Puducherry", transportation: "Train", duration: "42 hours", cost: "₹2,200" },

    // Patna to Amaravati
    { source: "Patna", destination: "Amaravati", transportation: "Train", duration: "22 hours", cost: "₹1,500" },
    { source: "Patna", destination: "Amaravati", transportation: "Flight", duration: "5 hours", cost: "₹14,000" },

    // Patna to Itanagar
    { source: "Patna", destination: "Itanagar", transportation: "Train", duration: "21 hours", cost: "₹1,200" },
    { source: "Patna", destination: "Itanagar", transportation: "Flight", duration: "3 hours", cost: "₹7,500" },

    // Patna to Dispur
    { source: "Patna", destination: "Dispur", transportation: "Train", duration: "16 hours", cost: "₹1,000" },
    { source: "Patna", destination: "Dispur", transportation: "Flight", duration: "2 hours", cost: "₹6,000" },

    // Patna to Raipur
    { source: "Patna", destination: "Raipur", transportation: "Train", duration: "14 hours", cost: "₹1,100" },
    { source: "Patna", destination: "Raipur", transportation: "Flight", duration: "1.5 hours", cost: "₹5,500" },

    // Patna to Panaji
    { source: "Patna", destination: "Panaji", transportation: "Train", duration: "30 hours", cost: "₹2,000" },
    { source: "Patna", destination: "Panaji", transportation: "Flight", duration: "3 hours", cost: "₹8,000" },

    // Patna to Gandhinagar
    { source: "Patna", destination: "Gandhinagar", transportation: "Train", duration: "24 hours", cost: "₹1,800" },
    { source: "Patna", destination: "Gandhinagar", transportation: "Flight", duration: "2.5 hours", cost: "₹7,000" },

    // Patna to Chandigarh
    { source: "Patna", destination: "Chandigarh", transportation: "Train", duration: "20 hours", cost: "₹1,500" },
    { source: "Patna", destination: "Chandigarh", transportation: "Flight", duration: "2 hours", cost: "₹6,500" },

    // Patna to Shimla
    { source: "Patna", destination: "Shimla", transportation: "Train", duration: "22 hours", cost: "₹1,600" },
    { source: "Patna", destination: "Shimla", transportation: "Flight", duration: "2.5 hours", cost: "₹7,000" },

    // Patna to Ranchi
    { source: "Patna", destination: "Ranchi", transportation: "Train", duration: "7 hours", cost: "₹700" },
    { source: "Patna", destination: "Ranchi", transportation: "Flight", duration: "1 hour", cost: "₹3,500" },

    // Patna to Bengaluru
    { source: "Patna", destination: "Bengaluru", transportation: "Train", duration: "36 hours", cost: "₹2,500" },
    { source: "Patna", destination: "Bengaluru", transportation: "Flight", duration: "2.5 hours", cost: "₹9,000" },

    // Patna to Thiruvananthapuram
    { source: "Patna", destination: "Thiruvananthapuram", transportation: "Train", duration: "48 hours", cost: "₹3,000" },
    { source: "Patna", destination: "Thiruvananthapuram", transportation: "Flight", duration: "3 hours", cost: "₹10,000" },

    // Patna to Bhopal
    { source: "Patna", destination: "Bhopal", transportation: "Train", duration: "18 hours", cost: "₹1,400" },
    { source: "Patna", destination: "Bhopal", transportation: "Flight", duration: "2 hours", cost: "₹6,000" },

    // Patna to Mumbai
    { source: "Patna", destination: "Mumbai", transportation: "Train", duration: "28 hours", cost: "₹2,000" },
    { source: "Patna", destination: "Mumbai", transportation: "Flight", duration: "2.5 hours", cost: "₹8,000" },

    // Patna to Imphal
    { source: "Patna", destination: "Imphal", transportation: "Flight", duration: "3 hours", cost: "₹8,500" },

    // Patna to Shillong
    { source: "Patna", destination: "Shillong", transportation: "Flight", duration: "3 hours", cost: "₹8,000" },

    // Patna to Aizawl
    { source: "Patna", destination: "Aizawl", transportation: "Flight", duration: "3 hours", cost: "₹8,000" },

    // Patna to Kohima
    { source: "Patna", destination: "Kohima", transportation: "Flight", duration: "3 hours", cost: "₹8,000" },

    // Patna to Bhubaneswar
    { source: "Patna", destination: "Bhubaneswar", transportation: "Train", duration: "14 hours", cost: "₹1,000" },
    { source: "Patna", destination: "Bhubaneswar", transportation: "Flight", duration: "1.5 hours", cost: "₹5,000" },

    // Patna to Jaipur
    { source: "Patna", destination: "Jaipur", transportation: "Train", duration: "18 hours", cost: "₹1,500" },
    { source: "Patna", destination: "Jaipur", transportation: "Flight", duration: "2 hours", cost: "₹6,500" },

    // Patna to Gangtok
    { source: "Patna", destination: "Gangtok", transportation: "Train", duration: "16 hours", cost: "₹1,200" },
    { source: "Patna", destination: "Gangtok", transportation: "Flight", duration: "2 hours", cost: "₹6,000" },

    // Patna to Chennai
    { source: "Patna", destination: "Chennai", transportation: "Train", duration: "32 hours", cost: "₹2,200" },
    { source: "Patna", destination: "Chennai", transportation: "Flight", duration: "2.5 hours", cost: "₹7,500" },

    // Patna to Hyderabad
    { source: "Patna", destination: "Hyderabad", transportation: "Train", duration: "28 hours", cost: "₹2,000" },
    { source: "Patna", destination: "Hyderabad", transportation: "Flight", duration: "2 hours", cost: "₹7,000" },

    // Patna to Agartala
    { source: "Patna", destination: "Agartala", transportation: "Train", duration: "24 hours", cost: "₹1,800" },
    { source: "Patna", destination: "Agartala", transportation: "Flight", duration: "3 hours", cost: "₹8,000" },

    // Patna to Lucknow
    { source: "Patna", destination: "Lucknow", transportation: "Train", duration: "9 hours", cost: "₹900" },
    { source: "Patna", destination: "Lucknow", transportation: "Flight", duration: "1.5 hours", cost: "₹4,500" },

    // Patna to Dehradun
    { source: "Patna", destination: "Dehradun", transportation: "Train", duration: "18 hours", cost: "₹1,400" },
    { source: "Patna", destination: "Dehradun", transportation: "Flight", duration: "2 hours", cost: "₹6,000" },

    // Patna to Kolkata
    { source: "Patna", destination: "Kolkata", transportation: "Train", duration: "7 hours", cost: "₹800" },
    { source: "Patna", destination: "Kolkata", transportation: "Flight", duration: "1 hour", cost: "₹3,500" },

    // Patna to Port Blair
    { source: "Patna", destination: "Port Blair", transportation: "Flight", duration: "6.5 hours", cost: "₹12,000" },

    // Patna to Chandigarh
    { source: "Patna", destination: "Chandigarh", transportation: "Train", duration: "16 hours", cost: "₹1,800" },
    { source: "Patna", destination: "Chandigarh", transportation: "Flight", duration: "2 hours", cost: "₹4,500" },

    // Patna to Daman
    { source: "Patna", destination: "Daman", transportation: "Train", duration: "24 hours", cost: "₹2,200" },
    { source: "Patna", destination: "Daman", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Patna to Delhi
    { source: "Patna", destination: "Delhi", transportation: "Train", duration: "12 hours", cost: "₹1,500" },
    { source: "Patna", destination: "Delhi", transportation: "Flight", duration: "1.5 hours", cost: "₹3,500" },

    // Patna to Srinagar (Summer) / Jammu (Winter)
    { source: "Patna", destination: "Srinagar", transportation: "Flight", duration: "2.5 hours", cost: "₹4,800" },
    { source: "Patna", destination: "Jammu", transportation: "Train", duration: "18 hours", cost: "₹2,000" },
    { source: "Patna", destination: "Jammu", transportation: "Flight", duration: "2 hours", cost: "₹4,200" },

    // Patna to Kavaratti
    { source: "Patna", destination: "Kavaratti", transportation: "Flight", duration: "5 hours", cost: "₹7,000" },

    // Patna to Leh (Ladakh)
    { source: "Patna", destination: "Leh", transportation: "Flight", duration: "3 hours", cost: "₹5,500" },

    // Patna to Puducherry
    { source: "Patna", destination: "Puducherry", transportation: "Train", duration: "36 hours", cost: "₹2,500" },
    { source: "Patna", destination: "Puducherry", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Raipur to Amaravati
    { source: "Raipur", destination: "Amaravati", transportation: "Bus", duration: "10 hours", cost: "₹800" },
    { source: "Raipur", destination: "Amaravati", transportation: "Train", duration: "9 hours", cost: "₹750" },
    { source: "Raipur", destination: "Amaravati", transportation: "Flight", duration: "1.5 hours", cost: "₹2,200" },

    // Raipur to Itanagar
    { source: "Raipur", destination: "Itanagar", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Raipur to Dispur
    { source: "Raipur", destination: "Dispur", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Raipur to Patna
    { source: "Raipur", destination: "Patna", transportation: "Train", duration: "14 hours", cost: "₹1,200" },
    { source: "Raipur", destination: "Patna", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },

    // Raipur to Panaji
    { source: "Raipur", destination: "Panaji", transportation: "Bus", duration: "12 hours", cost: "₹1,000" },
    { source: "Raipur", destination: "Panaji", transportation: "Train", duration: "11 hours", cost: "₹950" },

    // Raipur to Gandhinagar
    { source: "Raipur", destination: "Gandhinagar", transportation: "Train", duration: "16 hours", cost: "₹1,500" },
    { source: "Raipur", destination: "Gandhinagar", transportation: "Flight", duration: "2 hours", cost: "₹3,800" },

    // Raipur to Chandigarh
    { source: "Raipur", destination: "Chandigarh", transportation: "Train", duration: "22 hours", cost: "₹2,000" },
    { source: "Raipur", destination: "Chandigarh", transportation: "Flight", duration: "3 hours", cost: "₹4,500" },

    // Raipur to Shimla
    { source: "Raipur", destination: "Shimla", transportation: "Train", duration: "24 hours", cost: "₹2,200" },
    { source: "Raipur", destination: "Shimla", transportation: "Flight", duration: "3.5 hours", cost: "₹4,800" },

    // Raipur to Ranchi
    { source: "Raipur", destination: "Ranchi", transportation: "Bus", duration: "8 hours", cost: "₹700" },
    { source: "Raipur", destination: "Ranchi", transportation: "Train", duration: "7 hours", cost: "₹650" },
    { source: "Raipur", destination: "Ranchi", transportation: "Flight", duration: "1.5 hours", cost: "₹2,000" },

    // Raipur to Bengaluru
    { source: "Raipur", destination: "Bengaluru", transportation: "Train", duration: "20 hours", cost: "₹1,800" },
    { source: "Raipur", destination: "Bengaluru", transportation: "Flight", duration: "2.5 hours", cost: "₹4,200" },

    // Raipur to Thiruvananthapuram
    { source: "Raipur", destination: "Thiruvananthapuram", transportation: "Train", duration: "26 hours", cost: "₹2,500" },
    { source: "Raipur", destination: "Thiruvananthapuram", transportation: "Flight", duration: "3.5 hours", cost: "₹5,000" },

    // Raipur to Bhopal
    { source: "Raipur", destination: "Bhopal", transportation: "Train", duration: "10 hours", cost: "₹1,000" },
    { source: "Raipur", destination: "Bhopal", transportation: "Flight", duration: "1.5 hours", cost: "₹2,800" },

    // Raipur to Mumbai
    { source: "Raipur", destination: "Mumbai", transportation: "Train", duration: "12 hours", cost: "₹1,200" },
    { source: "Raipur", destination: "Mumbai", transportation: "Flight", duration: "1.5 hours", cost: "₹3,000" },

    // Raipur to Imphal
    { source: "Raipur", destination: "Imphal", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Raipur to Shillong
    { source: "Raipur", destination: "Shillong", transportation: "Flight", duration: "4 hours", cost: "₹6,200" },

    // Raipur to Aizawl
    { source: "Raipur", destination: "Aizawl", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Raipur to Kohima
    { source: "Raipur", destination: "Kohima", transportation: "Flight", duration: "4.5 hours", cost: "₹6,300" },

    // Raipur to Bhubaneswar
    { source: "Raipur", destination: "Bhubaneswar", transportation: "Bus", duration: "10 hours", cost: "₹900" },
    { source: "Raipur", destination: "Bhubaneswar", transportation: "Train", duration: "9 hours", cost: "₹850" },
    { source: "Raipur", destination: "Bhubaneswar", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },

    // Raipur to Jaipur
    { source: "Raipur", destination: "Jaipur", transportation: "Train", duration: "16 hours", cost: "₹1,500" },
    { source: "Raipur", destination: "Jaipur", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },

    // Raipur to Gangtok
    { source: "Raipur", destination: "Gangtok", transportation: "Flight", duration: "4.5 hours", cost: "₹6,000" },

    // Raipur to Chennai
    { source: "Raipur", destination: "Chennai", transportation: "Train", duration: "20 hours", cost: "₹1,900" },
    { source: "Raipur", destination: "Chennai", transportation: "Flight", duration: "2.5 hours", cost: "₹4,000" },

    // Raipur to Hyderabad
    { source: "Raipur", destination: "Hyderabad", transportation: "Bus", duration: "8 hours", cost: "₹800" },
    { source: "Raipur", destination: "Hyderabad", transportation: "Train", duration: "7 hours", cost: "₹750" },
    { source: "Raipur", destination: "Hyderabad", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },

    // Raipur to Agartala
    { source: "Raipur", destination: "Agartala", transportation: "Flight", duration: "5 hours", cost: "₹7,000" },

    // Raipur to Lucknow
    { source: "Raipur", destination: "Lucknow", transportation: "Train", duration: "14 hours", cost: "₹1,400" },
    { source: "Raipur", destination: "Lucknow", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },

    // Raipur to Dehradun
    { source: "Raipur", destination: "Dehradun", transportation: "Flight", duration: "3.5 hours", cost: "₹5,000" },

    // Raipur to Kolkata
    { source: "Raipur", destination: "Kolkata", transportation: "Train", duration: "13 hours", cost: "₹1,300" },
    { source: "Raipur", destination: "Kolkata", transportation: "Flight", duration: "1.5 hours", cost: "₹2,800" },

    // Raipur to Port Blair
    { source: "Raipur", destination: "Port Blair", transportation: "Flight", duration: "6 hours", cost: "₹9,000" },

    // Raipur to Daman
    { source: "Raipur", destination: "Daman", transportation: "Train", duration: "16 hours", cost: "₹1,800" },
    { source: "Raipur", destination: "Daman", transportation: "Flight", duration: "3 hours", cost: "₹4,500" },

    // Raipur to Delhi
    { source: "Raipur", destination: "Delhi", transportation: "Train", duration: "18 hours", cost: "₹1,600" },
    { source: "Raipur", destination: "Delhi", transportation: "Flight", duration: "2 hours", cost: "₹3,800" },

    // Raipur to Srinagar (Summer) / Jammu (Winter)
    { source: "Raipur", destination: "Srinagar", transportation: "Flight", duration: "4 hours", cost: "₹6,500" },
    { source: "Raipur", destination: "Jammu", transportation: "Train", duration: "24 hours", cost: "₹2,200" },

    // Raipur to Kavaratti
    { source: "Raipur", destination: "Kavaratti", transportation: "Flight + Ship", duration: "10 hours", cost: "₹12,000" },

    // Raipur to Leh (Ladakh)
    { source: "Raipur", destination: "Leh", transportation: "Flight", duration: "5 hours", cost: "₹7,500" },

    // Raipur to Puducherry
    { source: "Raipur", destination: "Puducherry", transportation: "Train", duration: "22 hours", cost: "₹2,100" },
    { source: "Raipur", destination: "Puducherry", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Panaji to Amaravati
    { source: "Panaji", destination: "Amaravati", transportation: "Bus", duration: "14 hours", cost: "₹1,200" },
    { source: "Panaji", destination: "Amaravati", transportation: "Train", duration: "12 hours", cost: "₹1,000" },
    { source: "Panaji", destination: "Amaravati", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },

    // Panaji to Itanagar
    { source: "Panaji", destination: "Itanagar", transportation: "Flight", duration: "6 hours", cost: "₹7,000" },

    // Panaji to Dispur
    { source: "Panaji", destination: "Dispur", transportation: "Flight", duration: "5.5 hours", cost: "₹6,500" },

    // Panaji to Patna
    { source: "Panaji", destination: "Patna", transportation: "Train", duration: "28 hours", cost: "₹2,500" },
    { source: "Panaji", destination: "Patna", transportation: "Flight", duration: "4 hours", cost: "₹5,000" },

    // Panaji to Raipur
    { source: "Panaji", destination: "Raipur", transportation: "Bus", duration: "16 hours", cost: "₹1,400" },
    { source: "Panaji", destination: "Raipur", transportation: "Train", duration: "14 hours", cost: "₹1,200" },
    { source: "Panaji", destination: "Raipur", transportation: "Flight", duration: "2.5 hours", cost: "₹3,800" },

    // Panaji to Gandhinagar
    { source: "Panaji", destination: "Gandhinagar", transportation: "Train", duration: "18 hours", cost: "₹1,800" },
    { source: "Panaji", destination: "Gandhinagar", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },

    // Panaji to Chandigarh
    { source: "Panaji", destination: "Chandigarh", transportation: "Train", duration: "32 hours", cost: "₹3,000" },
    { source: "Panaji", destination: "Chandigarh", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Panaji to Shimla
    { source: "Panaji", destination: "Shimla", transportation: "Train", duration: "34 hours", cost: "₹3,200" },
    { source: "Panaji", destination: "Shimla", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Panaji to Ranchi
    { source: "Panaji", destination: "Ranchi", transportation: "Train", duration: "26 hours", cost: "₹2,700" },
    { source: "Panaji", destination: "Ranchi", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Panaji to Bengaluru
    { source: "Panaji", destination: "Bengaluru", transportation: "Bus", duration: "12 hours", cost: "₹1,000" },
    { source: "Panaji", destination: "Bengaluru", transportation: "Train", duration: "10 hours", cost: "₹900" },
    { source: "Panaji", destination: "Bengaluru", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },

    // Panaji to Thiruvananthapuram
    { source: "Panaji", destination: "Thiruvananthapuram", transportation: "Bus", duration: "16 hours", cost: "₹1,500" },
    { source: "Panaji", destination: "Thiruvananthapuram", transportation: "Train", duration: "14 hours", cost: "₹1,300" },
    { source: "Panaji", destination: "Thiruvananthapuram", transportation: "Flight", duration: "2 hours", cost: "₹3,000" },

    // Panaji to Bhopal
    { source: "Panaji", destination: "Bhopal", transportation: "Train", duration: "20 hours", cost: "₹2,000" },
    { source: "Panaji", destination: "Bhopal", transportation: "Flight", duration: "3 hours", cost: "₹4,500" },

    // Panaji to Mumbai
    { source: "Panaji", destination: "Mumbai", transportation: "Bus", duration: "10 hours", cost: "₹900" },
    { source: "Panaji", destination: "Mumbai", transportation: "Train", duration: "8 hours", cost: "₹800" },
    { source: "Panaji", destination: "Mumbai", transportation: "Flight", duration: "1 hour", cost: "₹2,000" },

    // Panaji to Imphal
    { source: "Panaji", destination: "Imphal", transportation: "Flight", duration: "6.5 hours", cost: "₹7,500" },

    // Panaji to Shillong
    { source: "Panaji", destination: "Shillong", transportation: "Flight", duration: "6 hours", cost: "₹7,000" },

    // Panaji to Aizawl
    { source: "Panaji", destination: "Aizawl", transportation: "Flight", duration: "5.5 hours", cost: "₹6,800" },

    // Panaji to Kohima
    { source: "Panaji", destination: "Kohima", transportation: "Flight", duration: "6 hours", cost: "₹7,200" },

    // Panaji to Bhubaneswar
    { source: "Panaji", destination: "Bhubaneswar", transportation: "Train", duration: "24 hours", cost: "₹2,400" },
    { source: "Panaji", destination: "Bhubaneswar", transportation: "Flight", duration: "3.5 hours", cost: "₹5,000" },

    // Panaji to Jaipur
    { source: "Panaji", destination: "Jaipur", transportation: "Train", duration: "28 hours", cost: "₹2,800" },
    { source: "Panaji", destination: "Jaipur", transportation: "Flight", duration: "4 hours", cost: "₹5,500" },

    // Panaji to Gangtok
    { source: "Panaji", destination: "Gangtok", transportation: "Flight", duration: "6 hours", cost: "₹7,500" },
    
    // Panaji to Chennai
    { source: "Panaji", destination: "Chennai", transportation: "Bus", duration: "16 hours", cost: "₹1,500" },
    { source: "Panaji", destination: "Chennai", transportation: "Train", duration: "14 hours", cost: "₹1,300" },
    { source: "Panaji", destination: "Chennai", transportation: "Flight", duration: "2 hours", cost: "₹3,200" },
    
    // Panaji to Hyderabad
    { source: "Panaji", destination: "Hyderabad", transportation: "Bus", duration: "14 hours", cost: "₹1,200" },
    { source: "Panaji", destination: "Hyderabad", transportation: "Train", duration: "12 hours", cost: "₹1,000" },
    { source: "Panaji", destination: "Hyderabad", transportation: "Flight", duration: "1.5 hours", cost: "₹2,800" },
    
    // Panaji to Agartala
    { source: "Panaji", destination: "Agartala", transportation: "Flight", duration: "6.5 hours", cost: "₹7,800" },
    
    // Panaji to Lucknow
    { source: "Panaji", destination: "Lucknow", transportation: "Train", duration: "26 hours", cost: "₹2,600" },
    { source: "Panaji", destination: "Lucknow", transportation: "Flight", duration: "4 hours", cost: "₹5,200" },
    
    // Panaji to Dehradun
    { source: "Panaji", destination: "Dehradun", transportation: "Train", duration: "30 hours", cost: "₹2,900" },
    { source: "Panaji", destination: "Dehradun", transportation: "Flight", duration: "4.5 hours", cost: "₹6,000" },
    
    // Panaji to Kolkata
    { source: "Panaji", destination: "Kolkata", transportation: "Train", duration: "28 hours", cost: "₹2,700" },
    { source: "Panaji", destination: "Kolkata", transportation: "Flight", duration: "4 hours", cost: "₹5,500" },
    
    // Panaji to Port Blair
    { source: "Panaji", destination: "Port Blair", transportation: "Flight", duration: "6 hours", cost: "₹8,000" },
    
    // Panaji to Chandigarh
    { source: "Panaji", destination: "Chandigarh", transportation: "Train", duration: "32 hours", cost: "₹3,000" },
    { source: "Panaji", destination: "Chandigarh", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },
    
    // Panaji to Daman
    { source: "Panaji", destination: "Daman", transportation: "Bus", duration: "12 hours", cost: "₹1,200" },
    { source: "Panaji", destination: "Daman", transportation: "Train", duration: "10 hours", cost: "₹1,000" },
    
    // Panaji to Delhi
    { source: "Panaji", destination: "Delhi", transportation: "Train", duration: "30 hours", cost: "₹3,000" },
    { source: "Panaji", destination: "Delhi", transportation: "Flight", duration: "4 hours", cost: "₹5,500" },
    
    // Panaji to Srinagar (via Jammu in winter)
    { source: "Panaji", destination: "Srinagar", transportation: "Flight", duration: "6 hours", cost: "₹7,500" },
    { source: "Panaji", destination: "Jammu", transportation: "Train", duration: "36 hours", cost: "₹3,500" },
    
    // Panaji to Kavaratti
    { source: "Panaji", destination: "Kavaratti", transportation: "Flight + Ship", duration: "10 hours", cost: "₹8,500" },
    
    // Panaji to Leh
    { source: "Panaji", destination: "Leh", transportation: "Flight", duration: "7 hours", cost: "₹9,000" },
    
    // Panaji to Puducherry
    { source: "Panaji", destination: "Puducherry", transportation: "Bus", duration: "18 hours", cost: "₹1,700" },
    { source: "Panaji", destination: "Puducherry", transportation: "Train", duration: "16 hours", cost: "₹1,400" },
    { source: "Panaji", destination: "Puducherry", transportation: "Flight", duration: "2.5 hours", cost: "₹3,500" },

    // Gandhinagar to Amaravati
    { source: "Gandhinagar", destination: "Amaravati", transportation: "Train", duration: "20 hours", cost: "₹2,000" },
    { source: "Gandhinagar", destination: "Amaravati", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Gandhinagar to Itanagar
    { source: "Gandhinagar", destination: "Itanagar", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Gandhinagar to Dispur
    { source: "Gandhinagar", destination: "Dispur", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Gandhinagar to Patna
    { source: "Gandhinagar", destination: "Patna", transportation: "Train", duration: "22 hours", cost: "₹2,200" },
    { source: "Gandhinagar", destination: "Patna", transportation: "Flight", duration: "3 hours", cost: "₹4,000" },

    // Gandhinagar to Raipur
    { source: "Gandhinagar", destination: "Raipur", transportation: "Train", duration: "18 hours", cost: "₹1,800" },
    { source: "Gandhinagar", destination: "Raipur", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },

    // Gandhinagar to Panaji
    { source: "Gandhinagar", destination: "Panaji", transportation: "Train", duration: "16 hours", cost: "₹1,600" },
    { source: "Gandhinagar", destination: "Panaji", transportation: "Flight", duration: "1.5 hours", cost: "₹3,200" },

    // Gandhinagar to Chandigarh
    { source: "Gandhinagar", destination: "Chandigarh", transportation: "Train", duration: "14 hours", cost: "₹1,400" },
    { source: "Gandhinagar", destination: "Chandigarh", transportation: "Flight", duration: "1.5 hours", cost: "₹3,000" },

    // Gandhinagar to Shimla
    { source: "Gandhinagar", destination: "Shimla", transportation: "Train", duration: "15 hours", cost: "₹1,500" },
    { source: "Gandhinagar", destination: "Shimla", transportation: "Flight", duration: "2 hours", cost: "₹3,200" },

    // Gandhinagar to Ranchi
    { source: "Gandhinagar", destination: "Ranchi", transportation: "Train", duration: "20 hours", cost: "₹2,000" },
    { source: "Gandhinagar", destination: "Ranchi", transportation: "Flight", duration: "2.5 hours", cost: "₹4,000" },

    // Gandhinagar to Bengaluru
    { source: "Gandhinagar", destination: "Bengaluru", transportation: "Train", duration: "24 hours", cost: "₹2,400" },
    { source: "Gandhinagar", destination: "Bengaluru", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Gandhinagar to Thiruvananthapuram
    { source: "Gandhinagar", destination: "Thiruvananthapuram", transportation: "Train", duration: "28 hours", cost: "₹2,800" },
    { source: "Gandhinagar", destination: "Thiruvananthapuram", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Gandhinagar to Bhopal
    { source: "Gandhinagar", destination: "Bhopal", transportation: "Train", duration: "12 hours", cost: "₹1,200" },
    { source: "Gandhinagar", destination: "Bhopal", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },

    // Gandhinagar to Mumbai
    { source: "Gandhinagar", destination: "Mumbai", transportation: "Train", duration: "8 hours", cost: "₹800" },
    { source: "Gandhinagar", destination: "Mumbai", transportation: "Flight", duration: "1 hour", cost: "₹2,000" },

    // Gandhinagar to Imphal
    { source: "Gandhinagar", destination: "Imphal", transportation: "Flight", duration: "5 hours", cost: "₹7,000" },

    // Gandhinagar to Shillong
    { source: "Gandhinagar", destination: "Shillong", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Gandhinagar to Aizawl
    { source: "Gandhinagar", destination: "Aizawl", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Gandhinagar to Kohima
    { source: "Gandhinagar", destination: "Kohima", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Gandhinagar to Bhubaneswar
    { source: "Gandhinagar", destination: "Bhubaneswar", transportation: "Train", duration: "22 hours", cost: "₹2,200" },
    { source: "Gandhinagar", destination: "Bhubaneswar", transportation: "Flight", duration: "3 hours", cost: "₹4,000" },

    // Gandhinagar to Jaipur
    { source: "Gandhinagar", destination: "Jaipur", transportation: "Train", duration: "10 hours", cost: "₹1,000" },
    { source: "Gandhinagar", destination: "Jaipur", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },

    // Gandhinagar to Gangtok
    { source: "Gandhinagar", destination: "Gangtok", transportation: "Flight", duration: "5 hours", cost: "₹7,000" },

    // Gandhinagar to Chennai
    { source: "Gandhinagar", destination: "Chennai", transportation: "Train", duration: "26 hours", cost: "₹2,600" },
    { source: "Gandhinagar", destination: "Chennai", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },
    
    // Gandhinagar to Hyderabad
    { source: "Gandhinagar", destination: "Hyderabad", transportation: "Train", duration: "18 hours", cost: "₹1,800" },
    { source: "Gandhinagar", destination: "Hyderabad", transportation: "Flight", duration: "2 hours", cost: "₹3,800" },
    
    // Gandhinagar to Agartala
    { source: "Gandhinagar", destination: "Agartala", transportation: "Flight", duration: "5.5 hours", cost: "₹7,200" },
    
    // Gandhinagar to Lucknow
    { source: "Gandhinagar", destination: "Lucknow", transportation: "Train", duration: "16 hours", cost: "₹1,600" },
    { source: "Gandhinagar", destination: "Lucknow", transportation: "Flight", duration: "2.5 hours", cost: "₹3,500" },
    
    // Gandhinagar to Dehradun
    { source: "Gandhinagar", destination: "Dehradun", transportation: "Train", duration: "20 hours", cost: "₹2,000" },
    { source: "Gandhinagar", destination: "Dehradun", transportation: "Flight", duration: "3 hours", cost: "₹4,500" },
    
    // Gandhinagar to Kolkata
    { source: "Gandhinagar", destination: "Kolkata", transportation: "Train", duration: "26 hours", cost: "₹2,600" },
    { source: "Gandhinagar", destination: "Kolkata", transportation: "Flight", duration: "3.5 hours", cost: "₹5,200" },
    
    // Gandhinagar to Port Blair
    { source: "Gandhinagar", destination: "Port Blair", transportation: "Flight", duration: "6 hours", cost: "₹8,000" },
    
    // Gandhinagar to Chandigarh
    { source: "Gandhinagar", destination: "Chandigarh", transportation: "Train", duration: "14 hours", cost: "₹1,400" },
    { source: "Gandhinagar", destination: "Chandigarh", transportation: "Flight", duration: "1.5 hours", cost: "₹3,000" },
    
    // Gandhinagar to Daman
    { source: "Gandhinagar", destination: "Daman", transportation: "Bus", duration: "8 hours", cost: "₹800" },
    { source: "Gandhinagar", destination: "Daman", transportation: "Train", duration: "6 hours", cost: "₹600" },
    
    // Gandhinagar to Delhi
    { source: "Gandhinagar", destination: "Delhi", transportation: "Train", duration: "12 hours", cost: "₹1,200" },
    { source: "Gandhinagar", destination: "Delhi", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },
    
    // Gandhinagar to Srinagar (via Jammu in winter)
    { source: "Gandhinagar", destination: "Srinagar", transportation: "Flight", duration: "3.5 hours", cost: "₹6,500" },
    { source: "Gandhinagar", destination: "Jammu", transportation: "Train", duration: "16 hours", cost: "₹1,600" },
    
    // Gandhinagar to Kavaratti
    { source: "Gandhinagar", destination: "Kavaratti", transportation: "Flight + Ship", duration: "12 hours", cost: "₹9,000" },
    
    // Gandhinagar to Leh
    { source: "Gandhinagar", destination: "Leh", transportation: "Flight", duration: "4 hours", cost: "₹7,500" },
    
    // Gandhinagar to Puducherry
    { source: "Gandhinagar", destination: "Puducherry", transportation: "Bus", duration: "24 hours", cost: "₹2,400" },
    { source: "Gandhinagar", destination: "Puducherry", transportation: "Train", duration: "22 hours", cost: "₹2,000" },
    { source: "Gandhinagar", destination: "Puducherry", transportation: "Flight", duration: "3.5 hours", cost: "₹5,000" },

    // Chandigarh to Itanagar
    { source: "Chandigarh", destination: "Itanagar", transportation: "Flight", duration: "4.5 hours", cost: "₹7,000" },

    // Chandigarh to Dispur
    { source: "Chandigarh", destination: "Dispur", transportation: "Flight", duration: "4 hours", cost: "₹6,500" },

    // Chandigarh to Patna
    { source: "Chandigarh", destination: "Patna", transportation: "Train", duration: "16 hours", cost: "₹1,800" },
    { source: "Chandigarh", destination: "Patna", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },

    // Chandigarh to Raipur
    { source: "Chandigarh", destination: "Raipur", transportation: "Train", duration: "18 hours", cost: "₹2,000" },
    { source: "Chandigarh", destination: "Raipur", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Chandigarh to Panaji
    { source: "Chandigarh", destination: "Panaji", transportation: "Bus", duration: "24 hours", cost: "₹2,200" },
    { source: "Chandigarh", destination: "Panaji", transportation: "Train", duration: "22 hours", cost: "₹2,000" },
    { source: "Chandigarh", destination: "Panaji", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Chandigarh to Gandhinagar
    { source: "Chandigarh", destination: "Gandhinagar", transportation: "Train", duration: "14 hours", cost: "₹1,500" },
    { source: "Chandigarh", destination: "Gandhinagar", transportation: "Flight", duration: "1.5 hours", cost: "₹3,500" },

    // Chandigarh to Shimla
    { source: "Chandigarh", destination: "Shimla", transportation: "Bus", duration: "4 hours", cost: "₹500" },
    { source: "Chandigarh", destination: "Shimla", transportation: "Train", duration: "5 hours", cost: "₹600" },

    // Chandigarh to Ranchi
    { source: "Chandigarh", destination: "Ranchi", transportation: "Train", duration: "20 hours", cost: "₹2,200" },
    { source: "Chandigarh", destination: "Ranchi", transportation: "Flight", duration: "2.5 hours", cost: "₹4,200" },

    // Chandigarh to Bengaluru
    { source: "Chandigarh", destination: "Bengaluru", transportation: "Train", duration: "36 hours", cost: "₹3,000" },
    { source: "Chandigarh", destination: "Bengaluru", transportation: "Flight", duration: "3 hours", cost: "₹6,000" },

    // Chandigarh to Thiruvananthapuram
    { source: "Chandigarh", destination: "Thiruvananthapuram", transportation: "Train", duration: "40 hours", cost: "₹3,500" },
    { source: "Chandigarh", destination: "Thiruvananthapuram", transportation: "Flight", duration: "4 hours", cost: "₹6,500" },

    // Chandigarh to Bhopal
    { source: "Chandigarh", destination: "Bhopal", transportation: "Train", duration: "12 hours", cost: "₹1,400" },
    { source: "Chandigarh", destination: "Bhopal", transportation: "Flight", duration: "1.5 hours", cost: "₹3,200" },

    // Chandigarh to Mumbai
    { source: "Chandigarh", destination: "Mumbai", transportation: "Train", duration: "20 hours", cost: "₹2,000" },
    { source: "Chandigarh", destination: "Mumbai", transportation: "Flight", duration: "2 hours", cost: "₹4,500" },

    // Chandigarh to Imphal
    { source: "Chandigarh", destination: "Imphal", transportation: "Flight", duration: "5 hours", cost: "₹7,500" },

    // Chandigarh to Shillong
    { source: "Chandigarh", destination: "Shillong", transportation: "Flight", duration: "4.5 hours", cost: "₹7,000" },

    // Chandigarh to Aizawl
    { source: "Chandigarh", destination: "Aizawl", transportation: "Flight", duration: "4 hours", cost: "₹6,800" },

    // Chandigarh to Kohima
    { source: "Chandigarh", destination: "Kohima", transportation: "Flight", duration: "5 hours", cost: "₹7,200" },

    // Chandigarh to Bhubaneswar
    { source: "Chandigarh", destination: "Bhubaneswar", transportation: "Train", duration: "28 hours", cost: "₹2,500" },
    { source: "Chandigarh", destination: "Bhubaneswar", transportation: "Flight", duration: "3 hours", cost: "₹5,500" },

    // Chandigarh to Jaipur
    { source: "Chandigarh", destination: "Jaipur", transportation: "Bus", duration: "8 hours", cost: "₹900" },
    { source: "Chandigarh", destination: "Jaipur", transportation: "Train", duration: "7 hours", cost: "₹850" },

    // Chandigarh to Gangtok
    { source: "Chandigarh", destination: "Gangtok", transportation: "Flight", duration: "4.5 hours", cost: "₹7,000" },

    // Chandigarh to Chennai
    { source: "Chandigarh", destination: "Chennai", transportation: "Train", duration: "36 hours", cost: "₹3,200" },
    { source: "Chandigarh", destination: "Chennai", transportation: "Flight", duration: "3.5 hours", cost: "₹6,200" },

    // Chandigarh to Hyderabad
    { source: "Chandigarh", destination: "Hyderabad", transportation: "Train", duration: "28 hours", cost: "₹2,800" },
    { source: "Chandigarh", destination: "Hyderabad", transportation: "Flight", duration: "2.5 hours", cost: "₹4,000" },
    
    // Chandigarh to Agartala
    { source: "Chandigarh", destination: "Agartala", transportation: "Flight", duration: "5.5 hours", cost: "₹7,500" },
    
    // Chandigarh to Lucknow
    { source: "Chandigarh", destination: "Lucknow", transportation: "Train", duration: "12 hours", cost: "₹1,500" },
    { source: "Chandigarh", destination: "Lucknow", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },
    
    // Chandigarh to Dehradun
    { source: "Chandigarh", destination: "Dehradun", transportation: "Bus", duration: "6 hours", cost: "₹700" },
    { source: "Chandigarh", destination: "Dehradun", transportation: "Train", duration: "5 hours", cost: "₹800" },
    
    // Chandigarh to Kolkata
    { source: "Chandigarh", destination: "Kolkata", transportation: "Train", duration: "24 hours", cost: "₹2,500" },
    { source: "Chandigarh", destination: "Kolkata", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },
    
    // Union Territory Capitals
    
    // Chandigarh to Port Blair
    { source: "Chandigarh", destination: "Port Blair", transportation: "Flight", duration: "6 hours", cost: "₹8,000" },
    
    // Chandigarh to Chandigarh (Self-Reference)
    { source: "Chandigarh", destination: "Chandigarh", transportation: "None", duration: "0 hours", cost: "₹0" },
    
    // Chandigarh to Daman
    { source: "Chandigarh", destination: "Daman", transportation: "Train", duration: "18 hours", cost: "₹1,800" },
    { source: "Chandigarh", destination: "Daman", transportation: "Flight", duration: "2.5 hours", cost: "₹4,000" },
    
    // Chandigarh to Delhi
    { source: "Chandigarh", destination: "Delhi", transportation: "Train", duration: "4 hours", cost: "₹600" },
    { source: "Chandigarh", destination: "Delhi", transportation: "Bus", duration: "5 hours", cost: "₹500" },
    { source: "Chandigarh", destination: "Delhi", transportation: "Flight", duration: "1 hour", cost: "₹2,500" },
    
    // Chandigarh to Srinagar (via Jammu in winter)
    { source: "Chandigarh", destination: "Srinagar", transportation: "Flight", duration: "2 hours", cost: "₹5,500" },
    { source: "Chandigarh", destination: "Jammu", transportation: "Train", duration: "10 hours", cost: "₹1,200" },
    
    // Chandigarh to Kavaratti
    { source: "Chandigarh", destination: "Kavaratti", transportation: "Flight + Ship", duration: "12 hours", cost: "₹9,500" },
    
    // Chandigarh to Leh
    { source: "Chandigarh", destination: "Leh", transportation: "Flight", duration: "3 hours", cost: "₹7,200" },
    
    // Chandigarh to Puducherry
    { source: "Chandigarh", destination: "Puducherry", transportation: "Train", duration: "30 hours", cost: "₹3,000" },
    { source: "Chandigarh", destination: "Puducherry", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Shimla to Amaravati
    { source: "Shimla", destination: "Amaravati", transportation: "Flight", duration: "8 hours", cost: "₹6,500" },
    { source: "Shimla", destination: "Amaravati", transportation: "Train", duration: "30 hours", cost: "₹2,000" },

    // Shimla to Itanagar
    { source: "Shimla", destination: "Itanagar", transportation: "Flight", duration: "6 hours", cost: "₹5,500" },

    // Shimla to Dispur
    { source: "Shimla", destination: "Dispur", transportation: "Flight", duration: "5.5 hours", cost: "₹5,200" },

    // Shimla to Patna
    { source: "Shimla", destination: "Patna", transportation: "Train", duration: "24 hours", cost: "₹1,800" },
    { source: "Shimla", destination: "Patna", transportation: "Flight", duration: "4.5 hours", cost: "₹4,000" },

    // Shimla to Raipur
    { source: "Shimla", destination: "Raipur", transportation: "Train", duration: "28 hours", cost: "₹2,200" },
    { source: "Shimla", destination: "Raipur", transportation: "Flight", duration: "5 hours", cost: "₹4,500" },

    // Shimla to Panaji
    { source: "Shimla", destination: "Panaji", transportation: "Train", duration: "32 hours", cost: "₹2,500" },
    { source: "Shimla", destination: "Panaji", transportation: "Flight", duration: "6 hours", cost: "₹5,800" },

    // Shimla to Gandhinagar
    { source: "Shimla", destination: "Gandhinagar", transportation: "Train", duration: "20 hours", cost: "₹1,700" },
    { source: "Shimla", destination: "Gandhinagar", transportation: "Flight", duration: "4 hours", cost: "₹4,200" },

    // Shimla to Chandigarh
    { source: "Shimla", destination: "Chandigarh", transportation: "Bus", duration: "2 hours", cost: "₹300" },
    { source: "Shimla", destination: "Chandigarh", transportation: "Train", duration: "2.5 hours", cost: "₹250" },

    // Shimla to Ranchi
    { source: "Shimla", destination: "Ranchi", transportation: "Train", duration: "26 hours", cost: "₹2,000" },
    { source: "Shimla", destination: "Ranchi", transportation: "Flight", duration: "5 hours", cost: "₹4,500" },

    // Shimla to Bengaluru
    { source: "Shimla", destination: "Bengaluru", transportation: "Train", duration: "36 hours", cost: "₹3,000" },
    { source: "Shimla", destination: "Bengaluru", transportation: "Flight", duration: "6 hours", cost: "₹6,000" },

    // Shimla to Thiruvananthapuram
    { source: "Shimla", destination: "Thiruvananthapuram", transportation: "Train", duration: "40 hours", cost: "₹3,500" },
    { source: "Shimla", destination: "Thiruvananthapuram", transportation: "Flight", duration: "7 hours", cost: "₹6,500" },

    // Shimla to Bhopal
    { source: "Shimla", destination: "Bhopal", transportation: "Train", duration: "22 hours", cost: "₹1,800" },
    { source: "Shimla", destination: "Bhopal", transportation: "Flight", duration: "4.5 hours", cost: "₹4,000" },

    // Shimla to Mumbai
    { source: "Shimla", destination: "Mumbai", transportation: "Train", duration: "30 hours", cost: "₹2,500" },
    { source: "Shimla", destination: "Mumbai", transportation: "Flight", duration: "5.5 hours", cost: "₹5,000" },

    // Shimla to Imphal
    { source: "Shimla", destination: "Imphal", transportation: "Flight", duration: "6.5 hours", cost: "₹6,000" },

    // Shimla to Shillong
    { source: "Shimla", destination: "Shillong", transportation: "Flight", duration: "6 hours", cost: "₹5,800" },

    // Shimla to Aizawl
    { source: "Shimla", destination: "Aizawl", transportation: "Flight", duration: "6 hours", cost: "₹5,800" },

    // Shimla to Kohima
    { source: "Shimla", destination: "Kohima", transportation: "Flight", duration: "6.5 hours", cost: "₹6,000" },

    // Shimla to Bhubaneswar
    { source: "Shimla", destination: "Bhubaneswar", transportation: "Train", duration: "30 hours", cost: "₹2,500" },
    { source: "Shimla", destination: "Bhubaneswar", transportation: "Flight", duration: "5.5 hours", cost: "₹5,000" },

    // Shimla to Jaipur
    { source: "Shimla", destination: "Jaipur", transportation: "Train", duration: "12 hours", cost: "₹1,000" },
    { source: "Shimla", destination: "Jaipur", transportation: "Flight", duration: "3.5 hours", cost: "₹3,500" },

    // Shimla to Gangtok
    { source: "Shimla", destination: "Gangtok", transportation: "Flight", duration: "6 hours", cost: "₹5,500" },

    // Shimla to Chennai
    { source: "Shimla", destination: "Chennai", transportation: "Train", duration: "38 hours", cost: "₹3,200" },
    { source: "Shimla", destination: "Chennai", transportation: "Flight", duration: "6.5 hours", cost: "₹6,200" },

    // Shimla to Hyderabad
    { source: "Shimla", destination: "Hyderabad", transportation: "Train", duration: "32 hours", cost: "₹2,800" },
    { source: "Shimla", destination: "Hyderabad", transportation: "Flight", duration: "5.5 hours", cost: "₹5,500" },

    // Shimla to Agartala
    { source: "Shimla", destination: "Agartala", transportation: "Flight", duration: "7 hours", cost: "₹6,500" },

    // Shimla to Lucknow
    { source: "Shimla", destination: "Lucknow", transportation: "Train", duration: "14 hours", cost: "₹1,500" },
    { source: "Shimla", destination: "Lucknow", transportation: "Flight", duration: "3.5 hours", cost: "₹3,800" },

    // Shimla to Dehradun
    { source: "Shimla", destination: "Dehradun", transportation: "Bus", duration: "5 hours", cost: "₹600" },
    { source: "Shimla", destination: "Dehradun", transportation: "Train", duration: "6 hours", cost: "₹500" },

    // Shimla to Kolkata
    { source: "Shimla", destination: "Kolkata", transportation: "Train", duration: "30 hours", cost: "₹2,700" },
    { source: "Shimla", destination: "Kolkata", transportation: "Flight", duration: "5.5 hours", cost: "₹5,200" },

    // Shimla to Port Blair
    { source: "Shimla", destination: "Port Blair", transportation: "Flight", duration: "8 hours", cost: "₹7,500" },

    // Shimla to Delhi
    { source: "Shimla", destination: "Delhi", transportation: "Bus", duration: "8 hours", cost: "₹1,000" },
    { source: "Shimla", destination: "Delhi", transportation: "Train", duration: "6.5 hours", cost: "₹900" },

    // Shimla to Srinagar
    { source: "Shimla", destination: "Srinagar", transportation: "Flight", duration: "4 hours", cost: "₹4,500" },

    // Shimla to Jammu
    { source: "Shimla", destination: "Jammu", transportation: "Train", duration: "10 hours", cost: "₹1,200" },
    { source: "Shimla", destination: "Jammu", transportation: "Bus", duration: "9 hours", cost: "₹1,100" },

    // Shimla to Kavaratti
    { source: "Shimla", destination: "Kavaratti", transportation: "Flight + Ship", duration: "12 hours", cost: "₹8,000" },

    // Shimla to Leh
    { source: "Shimla", destination: "Leh", transportation: "Flight", duration: "5 hours", cost: "₹5,500" },

    // Shimla to Puducherry
    { source: "Shimla", destination: "Puducherry", transportation: "Train", duration: "40 hours", cost: "₹3,600" },
    { source: "Shimla", destination: "Puducherry", transportation: "Flight", duration: "7 hours", cost: "₹6,700" },

    // Ranchi to Itanagar
    { source: "Ranchi", destination: "Itanagar", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Ranchi to Dispur
    { source: "Ranchi", destination: "Dispur", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Ranchi to Patna
    { source: "Ranchi", destination: "Patna", transportation: "Bus", duration: "8 hours", cost: "₹600" },
    { source: "Ranchi", destination: "Patna", transportation: "Train", duration: "7 hours", cost: "₹550" },
    { source: "Ranchi", destination: "Patna", transportation: "Flight", duration: "1.5 hours", cost: "₹2,000" },

    // Ranchi to Raipur
    { source: "Ranchi", destination: "Raipur", transportation: "Bus", duration: "10 hours", cost: "₹800" },
    { source: "Ranchi", destination: "Raipur", transportation: "Train", duration: "9 hours", cost: "₹750" },
    { source: "Ranchi", destination: "Raipur", transportation: "Flight", duration: "1.5 hours", cost: "₹2,200" },

    // Ranchi to Panaji
    { source: "Ranchi", destination: "Panaji", transportation: "Bus", duration: "12 hours", cost: "₹1,000" },
    { source: "Ranchi", destination: "Panaji", transportation: "Train", duration: "11 hours", cost: "₹950" },
    { source: "Ranchi", destination: "Panaji", transportation: "Flight", duration: "2 hours", cost: "₹3,000" },

    // Ranchi to Gandhinagar
    { source: "Ranchi", destination: "Gandhinagar", transportation: "Train", duration: "16 hours", cost: "₹1,700" },
    { source: "Ranchi", destination: "Gandhinagar", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },

    // Ranchi to Chandigarh
    { source: "Ranchi", destination: "Chandigarh", transportation: "Train", duration: "26 hours", cost: "₹2,500" },
    { source: "Ranchi", destination: "Chandigarh", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Ranchi to Shimla
    { source: "Ranchi", destination: "Shimla", transportation: "Train", duration: "28 hours", cost: "₹2,800" },
    { source: "Ranchi", destination: "Shimla", transportation: "Flight", duration: "3.5 hours", cost: "₹5,200" },

    // Ranchi to Bengaluru
    { source: "Ranchi", destination: "Bengaluru", transportation: "Train", duration: "20 hours", cost: "₹2,000" },
    { source: "Ranchi", destination: "Bengaluru", transportation: "Flight", duration: "2.5 hours", cost: "₹4,000" },

    // Ranchi to Thiruvananthapuram
    { source: "Ranchi", destination: "Thiruvananthapuram", transportation: "Train", duration: "24 hours", cost: "₹2,400" },
    { source: "Ranchi", destination: "Thiruvananthapuram", transportation: "Flight", duration: "3 hours", cost: "₹4,500" },

    // Ranchi to Bhopal
    { source: "Ranchi", destination: "Bhopal", transportation: "Train", duration: "14 hours", cost: "₹1,500" },
    { source: "Ranchi", destination: "Bhopal", transportation: "Flight", duration: "1.5 hours", cost: "₹3,200" },

    // Ranchi to Mumbai
    { source: "Ranchi", destination: "Mumbai", transportation: "Train", duration: "18 hours", cost: "₹1,800" },
    { source: "Ranchi", destination: "Mumbai", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },

    // Ranchi to Imphal
    { source: "Ranchi", destination: "Imphal", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Ranchi to Shillong
    { source: "Ranchi", destination: "Shillong", transportation: "Flight", duration: "4 hours", cost: "₹6,200" },

    // Ranchi to Aizawl
    { source: "Ranchi", destination: "Aizawl", transportation: "Flight", duration: "3.5 hours", cost: "₹5,800" },

    // Ranchi to Kohima
    { source: "Ranchi", destination: "Kohima", transportation: "Flight", duration: "4 hours", cost: "₹6,300" },

    // Ranchi to Bhubaneswar
    { source: "Ranchi", destination: "Bhubaneswar", transportation: "Bus", duration: "10 hours", cost: "₹800" },
    { source: "Ranchi", destination: "Bhubaneswar", transportation: "Train", duration: "9 hours", cost: "₹750" },
    { source: "Ranchi", destination: "Bhubaneswar", transportation: "Flight", duration: "1.5 hours", cost: "₹2,200" },

    // Ranchi to Jaipur
    { source: "Ranchi", destination: "Jaipur", transportation: "Train", duration: "22 hours", cost: "₹2,200" },
    { source: "Ranchi", destination: "Jaipur", transportation: "Flight", duration: "2.5 hours", cost: "₹4,200" },

    // Ranchi to Gangtok
    { source: "Ranchi", destination: "Gangtok", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Ranchi to Chennai
    { source: "Ranchi", destination: "Chennai", transportation: "Train", duration: "18 hours", cost: "₹1,800" },
    { source: "Ranchi", destination: "Chennai", transportation: "Flight", duration: "2.5 hours", cost: "₹3,800" },

    // Ranchi to Hyderabad
    { source: "Ranchi", destination: "Hyderabad", transportation: "Train", duration: "16 hours", cost: "₹1,600" },
    { source: "Ranchi", destination: "Hyderabad", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },

    // Ranchi to Agartala
    { source: "Ranchi", destination: "Agartala", transportation: "Flight", duration: "3.5 hours", cost: "₹5,200" },

    // Ranchi to Lucknow
    { source: "Ranchi", destination: "Lucknow", transportation: "Train", duration: "10 hours", cost: "₹1,000" },
    { source: "Ranchi", destination: "Lucknow", transportation: "Flight", duration: "2 hours", cost: "₹3,200" },

    // Ranchi to Dehradun
    { source: "Ranchi", destination: "Dehradun", transportation: "Train", duration: "20 hours", cost: "₹2,200" },
    { source: "Ranchi", destination: "Dehradun", transportation: "Flight", duration: "3 hours", cost: "₹4,000" },

    // Ranchi to Kolkata
    { source: "Ranchi", destination: "Kolkata", transportation: "Bus", duration: "8 hours", cost: "₹700" },
    { source: "Ranchi", destination: "Kolkata", transportation: "Train", duration: "7 hours", cost: "₹650" },
    { source: "Ranchi", destination: "Kolkata", transportation: "Flight", duration: "1 hour", cost: "₹2,000" },

    // Ranchi to Port Blair
    { source: "Ranchi", destination: "Port Blair", transportation: "Flight", duration: "5 hours", cost: "₹7,500" },

    // Ranchi to Chandigarh (UT)
    { source: "Ranchi", destination: "Chandigarh", transportation: "Train", duration: "26 hours", cost: "₹2,500" },
    { source: "Ranchi", destination: "Chandigarh", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Ranchi to Daman
    { source: "Ranchi", destination: "Daman", transportation: "Train", duration: "18 hours", cost: "₹2,000" },
    { source: "Ranchi", destination: "Daman", transportation: "Flight", duration: "2.5 hours", cost: "₹4,200" },

    // Ranchi to Delhi
    { source: "Ranchi", destination: "Delhi", transportation: "Train", duration: "16 hours", cost: "₹1,700" },
    { source: "Ranchi", destination: "Delhi", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },

    // Ranchi to Srinagar (Summer) / Jammu (Winter)
    { source: "Ranchi", destination: "Srinagar", transportation: "Flight", duration: "3.5 hours", cost: "₹6,200" },
    { source: "Ranchi", destination: "Jammu", transportation: "Train", duration: "24 hours", cost: "₹2,500" },
    { source: "Ranchi", destination: "Jammu", transportation: "Flight", duration: "3 hours", cost: "₹5,500" },

    // Ranchi to Kavaratti
    { source: "Ranchi", destination: "Kavaratti", transportation: "Flight + Ship", duration: "8 hours", cost: "₹10,000" },

    // Ranchi to Leh (Ladakh)
    { source: "Ranchi", destination: "Leh", transportation: "Flight", duration: "4.5 hours", cost: "₹7,000" },

    // Ranchi to Puducherry
    { source: "Ranchi", destination: "Puducherry", transportation: "Train", duration: "20 hours", cost: "₹2,100" },
    { source: "Ranchi", destination: "Puducherry", transportation: "Flight", duration: "3.5 hours", cost: "₹4,500" },

    // Bengaluru to Amaravati
    { source: "Bengaluru", destination: "Amaravati", transportation: "Bus", duration: "12 hours", cost: "₹1,200" },
    { source: "Bengaluru", destination: "Amaravati", transportation: "Train", duration: "10 hours", cost: "₹1,000" },
    { source: "Bengaluru", destination: "Amaravati", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },

    // Bengaluru to Itanagar
    { source: "Bengaluru", destination: "Itanagar", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Bengaluru to Dispur
    { source: "Bengaluru", destination: "Dispur", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Bengaluru to Patna
    { source: "Bengaluru", destination: "Patna", transportation: "Train", duration: "36 hours", cost: "₹2,000" },
    { source: "Bengaluru", destination: "Patna", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Bengaluru to Raipur
    { source: "Bengaluru", destination: "Raipur", transportation: "Train", duration: "24 hours", cost: "₹1,800" },
    { source: "Bengaluru", destination: "Raipur", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },

    // Bengaluru to Panaji
    { source: "Bengaluru", destination: "Panaji", transportation: "Bus", duration: "10 hours", cost: "₹900" },
    { source: "Bengaluru", destination: "Panaji", transportation: "Train", duration: "12 hours", cost: "₹1,000" },

    // Bengaluru to Gandhinagar
    { source: "Bengaluru", destination: "Gandhinagar", transportation: "Train", duration: "30 hours", cost: "₹2,500" },
    { source: "Bengaluru", destination: "Gandhinagar", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },

    // Bengaluru to Chandigarh
    { source: "Bengaluru", destination: "Chandigarh", transportation: "Train", duration: "40 hours", cost: "₹3,000" },
    { source: "Bengaluru", destination: "Chandigarh", transportation: "Flight", duration: "3 hours", cost: "₹5,500" },

    // Bengaluru to Shimla
    { source: "Bengaluru", destination: "Shimla", transportation: "Train", duration: "42 hours", cost: "₹3,200" },
    { source: "Bengaluru", destination: "Shimla", transportation: "Flight", duration: "3.5 hours", cost: "₹5,800" },

    // Bengaluru to Ranchi
    { source: "Bengaluru", destination: "Ranchi", transportation: "Train", duration: "34 hours", cost: "₹2,200" },
    { source: "Bengaluru", destination: "Ranchi", transportation: "Flight", duration: "2.5 hours", cost: "₹4,200" },

    // Bengaluru to Thiruvananthapuram
    { source: "Bengaluru", destination: "Thiruvananthapuram", transportation: "Bus", duration: "16 hours", cost: "₹1,200" },
    { source: "Bengaluru", destination: "Thiruvananthapuram", transportation: "Train", duration: "14 hours", cost: "₹1,000" },
    { source: "Bengaluru", destination: "Thiruvananthapuram", transportation: "Flight", duration: "1 hour", cost: "₹2,500" },

    // Bengaluru to Bhopal
    { source: "Bengaluru", destination: "Bhopal", transportation: "Train", duration: "28 hours", cost: "₹2,000" },
    { source: "Bengaluru", destination: "Bhopal", transportation: "Flight", duration: "2 hours", cost: "₹3,800" },

    // Bengaluru to Mumbai
    { source: "Bengaluru", destination: "Mumbai", transportation: "Bus", duration: "18 hours", cost: "₹1,500" },
    { source: "Bengaluru", destination: "Mumbai", transportation: "Train", duration: "16 hours", cost: "₹1,200" },
    { source: "Bengaluru", destination: "Mumbai", transportation: "Flight", duration: "1.5 hours", cost: "₹3,000" },

    // Bengaluru to Imphal
    { source: "Bengaluru", destination: "Imphal", transportation: "Flight", duration: "5 hours", cost: "₹7,000" },

    // Bengaluru to Shillong
    { source: "Bengaluru", destination: "Shillong", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Bengaluru to Aizawl
    { source: "Bengaluru", destination: "Aizawl", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Bengaluru to Kohima
    { source: "Bengaluru", destination: "Kohima", transportation: "Flight", duration: "5 hours", cost: "₹7,000" },

    // Bengaluru to Bhubaneswar
    { source: "Bengaluru", destination: "Bhubaneswar", transportation: "Train", duration: "30 hours", cost: "₹2,500" },
    { source: "Bengaluru", destination: "Bhubaneswar", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },

    // Bengaluru to Jaipur
    { source: "Bengaluru", destination: "Jaipur", transportation: "Train", duration: "36 hours", cost: "₹2,800" },
    { source: "Bengaluru", destination: "Jaipur", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Bengaluru to Gangtok
    { source: "Bengaluru", destination: "Gangtok", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },
    
    // Bengaluru to Chennai
    { source: "Bengaluru", destination: "Chennai", transportation: "Bus", duration: "6 hours", cost: "₹600" },
    { source: "Bengaluru", destination: "Chennai", transportation: "Train", duration: "5 hours", cost: "₹500" },
    { source: "Bengaluru", destination: "Chennai", transportation: "Flight", duration: "1 hour", cost: "₹2,000" },
    
    // Bengaluru to Hyderabad
    { source: "Bengaluru", destination: "Hyderabad", transportation: "Bus", duration: "8 hours", cost: "₹800" },
    { source: "Bengaluru", destination: "Hyderabad", transportation: "Train", duration: "9 hours", cost: "₹900" },
    { source: "Bengaluru", destination: "Hyderabad", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },
    
    // Bengaluru to Agartala
    { source: "Bengaluru", destination: "Agartala", transportation: "Flight", duration: "5 hours", cost: "₹7,000" },
    
    // Bengaluru to Lucknow
    { source: "Bengaluru", destination: "Lucknow", transportation: "Train", duration: "32 hours", cost: "₹2,500" },
    { source: "Bengaluru", destination: "Lucknow", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },
    
    // Bengaluru to Dehradun
    { source: "Bengaluru", destination: "Dehradun", transportation: "Train", duration: "38 hours", cost: "₹2,800" },
    { source: "Bengaluru", destination: "Dehradun", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },
    
    // Bengaluru to Kolkata
    { source: "Bengaluru", destination: "Kolkata", transportation: "Train", duration: "28 hours", cost: "₹2,200" },
    { source: "Bengaluru", destination: "Kolkata", transportation: "Flight", duration: "2.5 hours", cost: "₹4,200" },
    
    // Bengaluru to Port Blair
    { source: "Bengaluru", destination: "Port Blair", transportation: "Flight", duration: "4 hours", cost: "₹7,500" },
    
    // Bengaluru to Daman
    { source: "Bengaluru", destination: "Daman", transportation: "Flight", duration: "2.5 hours", cost: "₹4,800" },
    
    // Bengaluru to Delhi
    { source: "Bengaluru", destination: "Delhi", transportation: "Train", duration: "36 hours", cost: "₹3,000" },
    { source: "Bengaluru", destination: "Delhi", transportation: "Flight", duration: "2.5 hours", cost: "₹5,500" },
    
    // Bengaluru to Srinagar/Jammu
    { source: "Bengaluru", destination: "Srinagar", transportation: "Flight", duration: "3.5 hours", cost: "₹6,500" },
    { source: "Bengaluru", destination: "Jammu", transportation: "Flight", duration: "3 hours", cost: "₹6,000" },
    
    // Bengaluru to Kavaratti
    { source: "Bengaluru", destination: "Kavaratti", transportation: "Flight", duration: "5 hours", cost: "₹8,000" },
    
    // Bengaluru to Leh
    { source: "Bengaluru", destination: "Leh", transportation: "Flight", duration: "4.5 hours", cost: "₹7,500" },
    
    // Bengaluru to Puducherry
    { source: "Bengaluru", destination: "Puducherry", transportation: "Bus", duration: "7 hours", cost: "₹700" },
    { source: "Bengaluru", destination: "Puducherry", transportation: "Train", duration: "8 hours", cost: "₹750" },
    { source: "Bengaluru", destination: "Puducherry", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },

    // Thiruvananthapuram to Amaravati
    { source: "Thiruvananthapuram", destination: "Amaravati", transportation: "Train", duration: "18 hours", cost: "₹1,800" },
    { source: "Thiruvananthapuram", destination: "Amaravati", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },

    // Thiruvananthapuram to Itanagar
    { source: "Thiruvananthapuram", destination: "Itanagar", transportation: "Flight", duration: "5.5 hours", cost: "₹7,500" },

    // Thiruvananthapuram to Dispur
    { source: "Thiruvananthapuram", destination: "Dispur", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Thiruvananthapuram to Patna
    { source: "Thiruvananthapuram", destination: "Patna", transportation: "Train", duration: "36 hours", cost: "₹2,500" },
    { source: "Thiruvananthapuram", destination: "Patna", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Thiruvananthapuram to Raipur
    { source: "Thiruvananthapuram", destination: "Raipur", transportation: "Train", duration: "30 hours", cost: "₹2,200" },
    { source: "Thiruvananthapuram", destination: "Raipur", transportation: "Flight", duration: "3 hours", cost: "₹4,800" },

    // Thiruvananthapuram to Panaji
    { source: "Thiruvananthapuram", destination: "Panaji", transportation: "Bus", duration: "16 hours", cost: "₹1,200" },
    { source: "Thiruvananthapuram", destination: "Panaji", transportation: "Train", duration: "15 hours", cost: "₹1,100" },
    { source: "Thiruvananthapuram", destination: "Panaji", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },

    // Thiruvananthapuram to Gandhinagar
    { source: "Thiruvananthapuram", destination: "Gandhinagar", transportation: "Train", duration: "32 hours", cost: "₹2,800" },
    { source: "Thiruvananthapuram", destination: "Gandhinagar", transportation: "Flight", duration: "3.5 hours", cost: "₹6,000" },

    // Thiruvananthapuram to Chandigarh
    { source: "Thiruvananthapuram", destination: "Chandigarh", transportation: "Train", duration: "40 hours", cost: "₹3,200" },
    { source: "Thiruvananthapuram", destination: "Chandigarh", transportation: "Flight", duration: "4 hours", cost: "₹6,500" },

    // Thiruvananthapuram to Shimla
    { source: "Thiruvananthapuram", destination: "Shimla", transportation: "Train", duration: "42 hours", cost: "₹3,500" },
    { source: "Thiruvananthapuram", destination: "Shimla", transportation: "Flight", duration: "4.5 hours", cost: "₹7,000" },

    // Thiruvananthapuram to Ranchi
    { source: "Thiruvananthapuram", destination: "Ranchi", transportation: "Train", duration: "34 hours", cost: "₹2,700" },
    { source: "Thiruvananthapuram", destination: "Ranchi", transportation: "Flight", duration: "3.5 hours", cost: "₹5,800" },

    // Thiruvananthapuram to Bengaluru
    { source: "Thiruvananthapuram", destination: "Bengaluru", transportation: "Bus", duration: "12 hours", cost: "₹900" },
    { source: "Thiruvananthapuram", destination: "Bengaluru", transportation: "Train", duration: "10 hours", cost: "₹850" },
    { source: "Thiruvananthapuram", destination: "Bengaluru", transportation: "Flight", duration: "1 hour", cost: "₹2,500" },

    // Thiruvananthapuram to Bhopal
    { source: "Thiruvananthapuram", destination: "Bhopal", transportation: "Train", duration: "28 hours", cost: "₹2,500" },
    { source: "Thiruvananthapuram", destination: "Bhopal", transportation: "Flight", duration: "3 hours", cost: "₹5,200" },

    // Thiruvananthapuram to Mumbai
    { source: "Thiruvananthapuram", destination: "Mumbai", transportation: "Train", duration: "22 hours", cost: "₹1,800" },
    { source: "Thiruvananthapuram", destination: "Mumbai", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },

    // Thiruvananthapuram to Imphal
    { source: "Thiruvananthapuram", destination: "Imphal", transportation: "Flight", duration: "5 hours", cost: "₹7,200" },

    // Thiruvananthapuram to Shillong
    { source: "Thiruvananthapuram", destination: "Shillong", transportation: "Flight", duration: "5 hours", cost: "₹7,000" },

    // Thiruvananthapuram to Aizawl
    { source: "Thiruvananthapuram", destination: "Aizawl", transportation: "Flight", duration: "4.5 hours", cost: "₹6,800" },

    // Thiruvananthapuram to Kohima
    { source: "Thiruvananthapuram", destination: "Kohima", transportation: "Flight", duration: "5 hours", cost: "₹7,100" },

    // Thiruvananthapuram to Bhubaneswar
    { source: "Thiruvananthapuram", destination: "Bhubaneswar", transportation: "Train", duration: "34 hours", cost: "₹2,600" },
    { source: "Thiruvananthapuram", destination: "Bhubaneswar", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Thiruvananthapuram to Chandigarh
    { source: "Thiruvananthapuram", destination: "Chandigarh", transportation: "Train", duration: "40 hours", cost: "₹3,200" },
    { source: "Thiruvananthapuram", destination: "Chandigarh", transportation: "Flight", duration: "4 hours", cost: "₹6,500" },

    // Thiruvananthapuram to Jaipur
    { source: "Thiruvananthapuram", destination: "Jaipur", transportation: "Train", duration: "38 hours", cost: "₹3,000" },
    { source: "Thiruvananthapuram", destination: "Jaipur", transportation: "Flight", duration: "3.5 hours", cost: "₹6,200" },

    // Thiruvananthapuram to Gangtok
    { source: "Thiruvananthapuram", destination: "Gangtok", transportation: "Flight", duration: "5 hours", cost: "₹7,300" },

    // Thiruvananthapuram to Chennai
    { source: "Thiruvananthapuram", destination: "Chennai", transportation: "Bus", duration: "13 hours", cost: "₹1,000" },
    { source: "Thiruvananthapuram", destination: "Chennai", transportation: "Train", duration: "12 hours", cost: "₹950" },
    { source: "Thiruvananthapuram", destination: "Chennai", transportation: "Flight", duration: "1 hour", cost: "₹2,800" },

    // Thiruvananthapuram to Hyderabad
    { source: "Thiruvananthapuram", destination: "Hyderabad", transportation: "Train", duration: "24 hours", cost: "₹2,000" },
    { source: "Thiruvananthapuram", destination: "Hyderabad", transportation: "Flight", duration: "2 hours", cost: "₹4,500" },

    // Thiruvananthapuram to Agartala
    { source: "Thiruvananthapuram", destination: "Agartala", transportation: "Flight", duration: "5 hours", cost: "₹7,600" },

    // Thiruvananthapuram to Lucknow
    { source: "Thiruvananthapuram", destination: "Lucknow", transportation: "Train", duration: "36 hours", cost: "₹2,800" },
    { source: "Thiruvananthapuram", destination: "Lucknow", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Thiruvananthapuram to Dehradun
    { source: "Thiruvananthapuram", destination: "Dehradun", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Thiruvananthapuram to Kolkata
    { source: "Thiruvananthapuram", destination: "Kolkata", transportation: "Train", duration: "40 hours", cost: "₹3,200" },
    { source: "Thiruvananthapuram", destination: "Kolkata", transportation: "Flight", duration: "3.5 hours", cost: "₹6,500" },

    // Union Territory Capitals
    // Thiruvananthapuram to Port Blair
    { source: "Thiruvananthapuram", destination: "Port Blair", transportation: "Flight", duration: "2.5 hours", cost: "₹5,000" },

    // Thiruvananthapuram to Chandigarh (UT)
    { source: "Thiruvananthapuram", destination: "Chandigarh", transportation: "Train", duration: "40 hours", cost: "₹3,200" },
    { source: "Thiruvananthapuram", destination: "Chandigarh", transportation: "Flight", duration: "4 hours", cost: "₹6,500" },

    // Thiruvananthapuram to Daman
    { source: "Thiruvananthapuram", destination: "Daman", transportation: "Train", duration: "26 hours", cost: "₹2,500" },
    { source: "Thiruvananthapuram", destination: "Daman", transportation: "Flight", duration: "3.5 hours", cost: "₹5,800" },

    // Thiruvananthapuram to Delhi
    { source: "Thiruvananthapuram", destination: "Delhi", transportation: "Train", duration: "42 hours", cost: "₹3,500" },
    { source: "Thiruvananthapuram", destination: "Delhi", transportation: "Flight", duration: "4 hours", cost: "₹6,800" },

    // Thiruvananthapuram to Srinagar/Jammu
    { source: "Thiruvananthapuram", destination: "Srinagar", transportation: "Flight", duration: "5 hours", cost: "₹7,200" },
    { source: "Thiruvananthapuram", destination: "Jammu", transportation: "Flight", duration: "4.5 hours", cost: "₹6,800" },

    // Thiruvananthapuram to Kavaratti
    { source: "Thiruvananthapuram", destination: "Kavaratti", transportation: "Ship", duration: "14 hours", cost: "₹3,500" },

    // Thiruvananthapuram to Leh (Ladakh)
    { source: "Thiruvananthapuram", destination: "Leh", transportation: "Flight", duration: "6 hours", cost: "₹8,000" },

    // Thiruvananthapuram to Puducherry
    { source: "Thiruvananthapuram", destination: "Puducherry", transportation: "Bus", duration: "12 hours", cost: "₹1,200" },
    { source: "Thiruvananthapuram", destination: "Puducherry", transportation: "Train", duration: "11 hours", cost: "₹1,100" },
    { source: "Thiruvananthapuram", destination: "Puducherry", transportation: "Flight", duration: "1.5 hours", cost: "₹3,500" },

    // Bhopal to Itanagar
    { source: "Bhopal", destination: "Itanagar", transportation: "Flight", duration: "4.5 hours", cost: "₹7,000" },

    // Bhopal to Dispur
    { source: "Bhopal", destination: "Dispur", transportation: "Flight", duration: "4 hours", cost: "₹6,500" },

    // Bhopal to Patna
    { source: "Bhopal", destination: "Patna", transportation: "Train", duration: "16 hours", cost: "₹1,400" },
    { source: "Bhopal", destination: "Patna", transportation: "Flight", duration: "2.5 hours", cost: "₹4,000" },

    // Bhopal to Raipur
    { source: "Bhopal", destination: "Raipur", transportation: "Bus", duration: "12 hours", cost: "₹900" },
    { source: "Bhopal", destination: "Raipur", transportation: "Train", duration: "10 hours", cost: "₹850" },
    { source: "Bhopal", destination: "Raipur", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },

    // Bhopal to Panaji
    { source: "Bhopal", destination: "Panaji", transportation: "Bus", duration: "14 hours", cost: "₹1,200" },
    { source: "Bhopal", destination: "Panaji", transportation: "Train", duration: "13 hours", cost: "₹1,100" },
    { source: "Bhopal", destination: "Panaji", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },

    // Bhopal to Gandhinagar
    { source: "Bhopal", destination: "Gandhinagar", transportation: "Bus", duration: "10 hours", cost: "₹1,000" },
    { source: "Bhopal", destination: "Gandhinagar", transportation: "Train", duration: "9 hours", cost: "₹950" },
    { source: "Bhopal", destination: "Gandhinagar", transportation: "Flight", duration: "1.5 hours", cost: "₹2,800" },

    // Bhopal to Chandigarh
    { source: "Bhopal", destination: "Chandigarh", transportation: "Train", duration: "18 hours", cost: "₹1,800" },
    { source: "Bhopal", destination: "Chandigarh", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Bhopal to Shimla
    { source: "Bhopal", destination: "Shimla", transportation: "Train", duration: "20 hours", cost: "₹2,000" },
    { source: "Bhopal", destination: "Shimla", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Bhopal to Ranchi
    { source: "Bhopal", destination: "Ranchi", transportation: "Train", duration: "14 hours", cost: "₹1,500" },
    { source: "Bhopal", destination: "Ranchi", transportation: "Flight", duration: "2 hours", cost: "₹3,800" },

    // Bhopal to Bengaluru
    { source: "Bhopal", destination: "Bengaluru", transportation: "Train", duration: "24 hours", cost: "₹2,200" },
    { source: "Bhopal", destination: "Bengaluru", transportation: "Flight", duration: "2.5 hours", cost: "₹4,000" },

    // Bhopal to Thiruvananthapuram
    { source: "Bhopal", destination: "Thiruvananthapuram", transportation: "Train", duration: "30 hours", cost: "₹2,500" },
    { source: "Bhopal", destination: "Thiruvananthapuram", transportation: "Flight", duration: "3 hours", cost: "₹5,500" },

    // Bhopal to Mumbai
    { source: "Bhopal", destination: "Mumbai", transportation: "Train", duration: "8 hours", cost: "₹1,000" },
    { source: "Bhopal", destination: "Mumbai", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },

    // Bhopal to Imphal
    { source: "Bhopal", destination: "Imphal", transportation: "Flight", duration: "5 hours", cost: "₹7,500" },

    // Bhopal to Shillong
    { source: "Bhopal", destination: "Shillong", transportation: "Flight", duration: "4.5 hours", cost: "₹7,000" },

    // Bhopal to Aizawl
    { source: "Bhopal", destination: "Aizawl", transportation: "Flight", duration: "4 hours", cost: "₹6,800" },

    // Bhopal to Kohima
    { source: "Bhopal", destination: "Kohima", transportation: "Flight", duration: "4.5 hours", cost: "₹7,200" },

    // Bhopal to Bhubaneswar
    { source: "Bhopal", destination: "Bhubaneswar", transportation: "Train", duration: "20 hours", cost: "₹2,000" },
    { source: "Bhopal", destination: "Bhubaneswar", transportation: "Flight", duration: "2.5 hours", cost: "₹4,200" },

    // Bhopal to Jaipur
    { source: "Bhopal", destination: "Jaipur", transportation: "Bus", duration: "12 hours", cost: "₹1,100" },
    { source: "Bhopal", destination: "Jaipur", transportation: "Train", duration: "10 hours", cost: "₹1,000" },
    { source: "Bhopal", destination: "Jaipur", transportation: "Flight", duration: "1.5 hours", cost: "₹2,800" },

    // Bhopal to Gangtok
    { source: "Bhopal", destination: "Gangtok", transportation: "Flight", duration: "4.5 hours", cost: "₹7,000" },

    // Bhopal to Chennai
    { source: "Bhopal", destination: "Chennai", transportation: "Train", duration: "25 hours", cost: "₹2,200" },
    { source: "Bhopal", destination: "Chennai", transportation: "Flight", duration: "2.5 hours", cost: "₹4,000" },

    // Bhopal to Hyderabad
    { source: "Bhopal", destination: "Hyderabad", transportation: "Train", duration: "14 hours", cost: "₹1,600" },
    { source: "Bhopal", destination: "Hyderabad", transportation: "Flight", duration: "1.5 hours", cost: "₹3,500" },

    // Bhopal to Agartala
    { source: "Bhopal", destination: "Agartala", transportation: "Flight", duration: "4.5 hours", cost: "₹7,500" },

    // Bhopal to Lucknow
    { source: "Bhopal", destination: "Lucknow", transportation: "Train", duration: "12 hours", cost: "₹1,500" },
    { source: "Bhopal", destination: "Lucknow", transportation: "Flight", duration: "1.5 hours", cost: "₹3,200" },

    // Bhopal to Dehradun
    { source: "Bhopal", destination: "Dehradun", transportation: "Train", duration: "18 hours", cost: "₹1,800" },
    { source: "Bhopal", destination: "Dehradun", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Bhopal to Kolkata
    { source: "Bhopal", destination: "Kolkata", transportation: "Train", duration: "22 hours", cost: "₹2,000" },
    { source: "Bhopal", destination: "Kolkata", transportation: "Flight", duration: "2.5 hours", cost: "₹4,200" },

    // Bhopal to Port Blair
    { source: "Bhopal", destination: "Port Blair", transportation: "Flight", duration: "6 hours", cost: "₹9,000" },

    // Bhopal to Chandigarh (UT)
    { source: "Bhopal", destination: "Chandigarh", transportation: "Train", duration: "18 hours", cost: "₹1,800" },
    { source: "Bhopal", destination: "Chandigarh", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Bhopal to Daman
    { source: "Bhopal", destination: "Daman", transportation: "Train", duration: "12 hours", cost: "₹1,700" },
    { source: "Bhopal", destination: "Daman", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Bhopal to Delhi
    { source: "Bhopal", destination: "Delhi", transportation: "Train", duration: "8 hours", cost: "₹1,200" },
    { source: "Bhopal", destination: "Delhi", transportation: "Flight", duration: "1.5 hours", cost: "₹3,000" },

    // Bhopal to Srinagar (Summer) / Jammu (Winter)
    { source: "Bhopal", destination: "Srinagar", transportation: "Flight", duration: "3 hours", cost: "₹6,000" },
    { source: "Bhopal", destination: "Jammu", transportation: "Train", duration: "20 hours", cost: "₹2,500" },

    // Bhopal to Kavaratti
    { source: "Bhopal", destination: "Kavaratti", transportation: "Flight + Ship", duration: "10 hours", cost: "₹10,000" },

    // Bhopal to Leh
    { source: "Bhopal", destination: "Leh", transportation: "Flight", duration: "4 hours", cost: "₹7,500" },

    // Bhopal to Puducherry
    { source: "Bhopal", destination: "Puducherry", transportation: "Train", duration: "30 hours", cost: "₹2,800" },
    { source: "Bhopal", destination: "Puducherry", transportation: "Flight", duration: "3.5 hours", cost: "₹6,000" },

    // Mumbai to Amaravati
    { source: "Mumbai", destination: "Amaravati", transportation: "Train", duration: "12 hours", cost: "₹1,200" },
    { source: "Mumbai", destination: "Amaravati", transportation: "Flight", duration: "1.5 hours", cost: "₹3,000" },

    // Mumbai to Itanagar
    { source: "Mumbai", destination: "Itanagar", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Mumbai to Dispur
    { source: "Mumbai", destination: "Dispur", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Mumbai to Patna
    { source: "Mumbai", destination: "Patna", transportation: "Train", duration: "22 hours", cost: "₹2,000" },
    { source: "Mumbai", destination: "Patna", transportation: "Flight", duration: "2.5 hours", cost: "₹4,000" },

    // Mumbai to Raipur
    { source: "Mumbai", destination: "Raipur", transportation: "Train", duration: "15 hours", cost: "₹1,500" },
    { source: "Mumbai", destination: "Raipur", transportation: "Flight", duration: "2 hours", cost: "₹3,200" },

    // Mumbai to Panaji
    { source: "Mumbai", destination: "Panaji", transportation: "Bus", duration: "12 hours", cost: "₹1,000" },
    { source: "Mumbai", destination: "Panaji", transportation: "Train", duration: "10 hours", cost: "₹900" },
    { source: "Mumbai", destination: "Panaji", transportation: "Flight", duration: "1 hour", cost: "₹2,500" },

    // Mumbai to Gandhinagar
    { source: "Mumbai", destination: "Gandhinagar", transportation: "Train", duration: "8 hours", cost: "₹800" },
    { source: "Mumbai", destination: "Gandhinagar", transportation: "Flight", duration: "1 hour", cost: "₹2,000" },

    // Mumbai to Chandigarh
    { source: "Mumbai", destination: "Chandigarh", transportation: "Train", duration: "24 hours", cost: "₹2,500" },
    { source: "Mumbai", destination: "Chandigarh", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Mumbai to Shimla
    { source: "Mumbai", destination: "Shimla", transportation: "Train", duration: "26 hours", cost: "₹2,700" },
    { source: "Mumbai", destination: "Shimla", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Mumbai to Ranchi
    { source: "Mumbai", destination: "Ranchi", transportation: "Train", duration: "20 hours", cost: "₹2,200" },
    { source: "Mumbai", destination: "Ranchi", transportation: "Flight", duration: "2.5 hours", cost: "₹4,200" },

    // Mumbai to Bengaluru
    { source: "Mumbai", destination: "Bengaluru", transportation: "Train", duration: "24 hours", cost: "₹2,500" },
    { source: "Mumbai", destination: "Bengaluru", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Mumbai to Thiruvananthapuram
    { source: "Mumbai", destination: "Thiruvananthapuram", transportation: "Train", duration: "24 hours", cost: "₹2,500" },
    { source: "Mumbai", destination: "Thiruvananthapuram", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Mumbai to Bhopal
    { source: "Mumbai", destination: "Bhopal", transportation: "Train", duration: "24 hours", cost: "₹2,500" },
    { source: "Mumbai", destination: "Bhopal", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Mumbai to Imphal
    { source: "Mumbai", destination: "Imphal", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Mumbai to Shillong
    { source: "Mumbai", destination: "Shillong", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Mumbai to Aizawl
    { source: "Mumbai", destination: "Aizawl", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Mumbai to Kohima
    { source: "Mumbai", destination: "Kohima", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Mumbai to Bhubaneswar
    { source: "Mumbai", destination: "Bhubaneswar", transportation: "Train", duration: "24 hours", cost: "₹2,500" },
    { source: "Mumbai", destination: "Bhubaneswar", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Mumbai to Jaipur
    { source: "Mumbai", destination: "Jaipur", transportation: "Train", duration: "24 hours", cost: "₹2,500" },
    { source: "Mumbai", destination: "Jaipur", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Mumbai to Gangtok
    { source: "Mumbai", destination: "Gangtok", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Mumbai to Chennai
    { source: "Mumbai", destination: "Chennai", transportation: "Train", duration: "24 hours", cost: "₹2,500" },
    { source: "Mumbai", destination: "Chennai", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Mumbai to Hyderabad
    { source: "Mumbai", destination: "Hyderabad", transportation: "Train", duration: "14 hours", cost: "₹1,500" },
    { source: "Mumbai", destination: "Hyderabad", transportation: "Flight", duration: "1.5 hours", cost: "₹3,500" },

    // Mumbai to Agartala
    { source: "Mumbai", destination: "Agartala", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Mumbai to Lucknow
    { source: "Mumbai", destination: "Lucknow", transportation: "Train", duration: "22 hours", cost: "₹2,000" },
    { source: "Mumbai", destination: "Lucknow", transportation: "Flight", duration: "2.5 hours", cost: "₹4,200" },

    // Mumbai to Dehradun
    { source: "Mumbai", destination: "Dehradun", transportation: "Train", duration: "28 hours", cost: "₹2,500" },
    { source: "Mumbai", destination: "Dehradun", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Mumbai to Kolkata
    { source: "Mumbai", destination: "Kolkata", transportation: "Train", duration: "30 hours", cost: "₹2,800" },
    { source: "Mumbai", destination: "Kolkata", transportation: "Flight", duration: "2.5 hours", cost: "₹4,800" },

    // Mumbai to Port Blair
    { source: "Mumbai", destination: "Port Blair", transportation: "Flight", duration: "5 hours", cost: "₹7,000" },

    // Mumbai to Daman
    { source: "Mumbai", destination: "Daman", transportation: "Bus", duration: "4 hours", cost: "₹500" },
    { source: "Mumbai", destination: "Daman", transportation: "Train", duration: "3.5 hours", cost: "₹600" },

    // Mumbai to Delhi
    { source: "Mumbai", destination: "Delhi", transportation: "Train", duration: "16 hours", cost: "₹2,200" },
    { source: "Mumbai", destination: "Delhi", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },

    // Mumbai to Srinagar (Summer) / Jammu (Winter)
    { source: "Mumbai", destination: "Srinagar", transportation: "Flight", duration: "3 hours", cost: "₹5,500" },
    { source: "Mumbai", destination: "Jammu", transportation: "Train", duration: "30 hours", cost: "₹2,900" },
    { source: "Mumbai", destination: "Jammu", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Mumbai to Kavaratti
    { source: "Mumbai", destination: "Kavaratti", transportation: "Flight + Ship", duration: "6 hours", cost: "₹8,000" },

    // Mumbai to Leh
    { source: "Mumbai", destination: "Leh", transportation: "Flight", duration: "4 hours", cost: "₹6,500" },

    // Mumbai to Puducherry
    { source: "Mumbai", destination: "Puducherry", transportation: "Train", duration: "28 hours", cost: "₹2,600" },
    { source: "Mumbai", destination: "Puducherry", transportation: "Flight", duration: "3 hours", cost: "₹5,200" },

    // Imphal to Itanagar
    { source: "Imphal", destination: "Itanagar", transportation: "Bus", duration: "15 hours", cost: "₹1,200" },
    { source: "Imphal", destination: "Itanagar", transportation: "Flight", duration: "2 hours (via connecting flights)", cost: "₹4,500" },

    // Imphal to Dispur (Guwahati)
    { source: "Imphal", destination: "Dispur", transportation: "Bus", duration: "12 hours", cost: "₹1,000" },
    { source: "Imphal", destination: "Dispur", transportation: "Flight", duration: "1.5 hours", cost: "₹3,500" },

    // Imphal to Patna
    { source: "Imphal", destination: "Patna", transportation: "Flight", duration: "3 hours (via connecting flights)", cost: "₹5,500" },

    // Imphal to Raipur
    { source: "Imphal", destination: "Raipur", transportation: "Flight", duration: "4 hours (via connecting flights)", cost: "₹6,000" },

    // Imphal to Panaji
    { source: "Imphal", destination: "Panaji", transportation: "Flight", duration: "5 hours (via connecting flights)", cost: "₹7,000" },

    // Imphal to Gandhinagar (Ahmedabad)
    { source: "Imphal", destination: "Gandhinagar", transportation: "Flight", duration: "4.5 hours (via connecting flights)", cost: "₹6,500" },

    // Imphal to Chandigarh
    { source: "Imphal", destination: "Chandigarh", transportation: "Flight", duration: "4 hours (via connecting flights)", cost: "₹6,200" },

    // Imphal to Shimla
    { source: "Imphal", destination: "Shimla", transportation: "Flight", duration: "4.5 hours (via connecting flights)", cost: "₹6,500" },

    // Imphal to Ranchi
    { source: "Imphal", destination: "Ranchi", transportation: "Flight", duration: "3.5 hours (via connecting flights)", cost: "₹5,800" },

    // Imphal to Bengaluru
    { source: "Imphal", destination: "Bengaluru", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Imphal to Thiruvananthapuram
    { source: "Imphal", destination: "Thiruvananthapuram", transportation: "Flight", duration: "4.5 hours (via connecting flights)", cost: "₹6,500" },

    // Imphal to Bhopal
    { source: "Imphal", destination: "Bhopal", transportation: "Flight", duration: "4 hours (via connecting flights)", cost: "₹6,000" },

    // Imphal to Mumbai
    { source: "Imphal", destination: "Mumbai", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Imphal to Shillong
    { source: "Imphal", destination: "Shillong", transportation: "Bus", duration: "10 hours", cost: "₹900" },
    { source: "Imphal", destination: "Shillong", transportation: "Flight", duration: "1.5 hours", cost: "₹3,500" },

    // Imphal to Aizawl
    { source: "Imphal", destination: "Aizawl", transportation: "Bus", duration: "8 hours", cost: "₹800" },
    { source: "Imphal", destination: "Aizawl", transportation: "Flight", duration: "1 hour", cost: "₹2,500" },

    // Imphal to Kohima
    { source: "Imphal", destination: "Kohima", transportation: "Bus", duration: "7 hours", cost: "₹700" },

    // Imphal to Bhubaneswar
    { source: "Imphal", destination: "Bhubaneswar", transportation: "Flight", duration: "3.5 hours (via connecting flights)", cost: "₹5,800" },

    // Imphal to Jaipur
    { source: "Imphal", destination: "Jaipur", transportation: "Flight", duration: "4 hours (via connecting flights)", cost: "₹6,200" },

    // Imphal to Gangtok
    { source: "Imphal", destination: "Gangtok", transportation: "Bus", duration: "14 hours", cost: "₹1,100" },
    { source: "Imphal", destination: "Gangtok", transportation: "Flight", duration: "2 hours (via connecting flights)", cost: "₹4,500" },

    // Imphal to Chennai
    { source: "Imphal", destination: "Chennai", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Imphal to Hyderabad
    { source: "Imphal", destination: "Hyderabad", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Imphal to Agartala
    { source: "Imphal", destination: "Agartala", transportation: "Bus", duration: "12 hours", cost: "₹1,000" },
    { source: "Imphal", destination: "Agartala", transportation: "Flight", duration: "1.5 hours", cost: "₹3,500" },

    // Imphal to Lucknow
    { source: "Imphal", destination: "Lucknow", transportation: "Flight", duration: "3.5 hours (via connecting flights)", cost: "₹5,500" },

    // Imphal to Dehradun
    { source: "Imphal", destination: "Dehradun", transportation: "Flight", duration: "4 hours (via connecting flights)", cost: "₹6,000" },

    // Imphal to Kolkata
    { source: "Imphal", destination: "Kolkata", transportation: "Flight", duration: "1.5 hours", cost: "₹3,500" },

    // Imphal to Port Blair
    { source: "Imphal", destination: "Port Blair", transportation: "Flight", duration: "5 hours (via connecting flights)", cost: "₹7,000" },

    // Imphal to Chandigarh
    { source: "Imphal", destination: "Chandigarh", transportation: "Flight", duration: "4 hours (via connecting flights)", cost: "₹6,200" },

    // Imphal to Daman
    { source: "Imphal", destination: "Daman", transportation: "Flight", duration: "5 hours (via connecting flights)", cost: "₹7,500" },

    // Imphal to Delhi
    { source: "Imphal", destination: "Delhi", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Imphal to Srinagar / Jammu
    { source: "Imphal", destination: "Srinagar", transportation: "Flight", duration: "4.5 hours (via connecting flights)", cost: "₹6,800" },
    { source: "Imphal", destination: "Jammu", transportation: "Flight", duration: "4 hours (via connecting flights)", cost: "₹6,500" },

    // Imphal to Kavaratti
    { source: "Imphal", destination: "Kavaratti", transportation: "Flight + Ship", duration: "8 hours", cost: "₹9,000" },

    // Imphal to Leh
    { source: "Imphal", destination: "Leh", transportation: "Flight", duration: "5 hours (via connecting flights)", cost: "₹7,500" },

    // Imphal to Puducherry
    { source: "Imphal", destination: "Puducherry", transportation: "Flight", duration: "4.5 hours (via connecting flights)", cost: "₹6,800" },

    // Shillong to Amaravati
    { source: "Shillong", destination: "Amaravati", transportation: "Flight", duration: "4 hours", cost: "₹6,500" },
    { source: "Shillong", destination: "Amaravati", transportation: "Train", duration: "36 hours", cost: "₹2,000" },
    { source: "Shillong", destination: "Amaravati", transportation: "Bus", duration: "48 hours", cost: "₹1,500" },

    // Shillong to Itanagar
    { source: "Shillong", destination: "Itanagar", transportation: "Bus", duration: "10 hours", cost: "₹1,000" },
    { source: "Shillong", destination: "Itanagar", transportation: "Flight", duration: "3 hours", cost: "₹4,500" },

    // Shillong to Dispur
    { source: "Shillong", destination: "Dispur", transportation: "Bus", duration: "3 hours", cost: "₹500" },
    { source: "Shillong", destination: "Dispur", transportation: "Train", duration: "2.5 hours", cost: "₹400" },
    { source: "Shillong", destination: "Dispur", transportation: "Flight", duration: "1 hour", cost: "₹2,000" },

    // Shillong to Patna
    { source: "Shillong", destination: "Patna", transportation: "Train", duration: "20 hours", cost: "₹1,800" },
    { source: "Shillong", destination: "Patna", transportation: "Flight", duration: "2.5 hours", cost: "₹5,000" },

    // Shillong to Raipur
    { source: "Shillong", destination: "Raipur", transportation: "Train", duration: "24 hours", cost: "₹2,000" },
    { source: "Shillong", destination: "Raipur", transportation: "Flight", duration: "3 hours", cost: "₹5,500" },

    // Shillong to Panaji
    { source: "Shillong", destination: "Panaji", transportation: "Train", duration: "30 hours", cost: "₹2,500" },
    { source: "Shillong", destination: "Panaji", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Shillong to Gandhinagar
    { source: "Shillong", destination: "Gandhinagar", transportation: "Train", duration: "32 hours", cost: "₹2,800" },
    { source: "Shillong", destination: "Gandhinagar", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Shillong to Chandigarh
    { source: "Shillong", destination: "Chandigarh", transportation: "Train", duration: "28 hours", cost: "₹2,500" },
    { source: "Shillong", destination: "Chandigarh", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Shillong to Shimla
    { source: "Shillong", destination: "Shimla", transportation: "Train", duration: "30 hours", cost: "₹2,700" },
    { source: "Shillong", destination: "Shimla", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Shillong to Ranchi
    { source: "Shillong", destination: "Ranchi", transportation: "Train", duration: "22 hours", cost: "₹2,000" },
    { source: "Shillong", destination: "Ranchi", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Shillong to Bengaluru
    { source: "Shillong", destination: "Bengaluru", transportation: "Train", duration: "36 hours", cost: "₹3,000" },
    { source: "Shillong", destination: "Bengaluru", transportation: "Flight", duration: "5 hours", cost: "₹7,000" },

    // Shillong to Thiruvananthapuram
    { source: "Shillong", destination: "Thiruvananthapuram", transportation: "Train", duration: "40 hours", cost: "₹3,500" },
    { source: "Shillong", destination: "Thiruvananthapuram", transportation: "Flight", duration: "5.5 hours", cost: "₹7,500" },

    // Shillong to Bhopal
    { source: "Shillong", destination: "Bhopal", transportation: "Train", duration: "28 hours", cost: "₹2,500" },
    { source: "Shillong", destination: "Bhopal", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Shillong to Mumbai
    { source: "Shillong", destination: "Mumbai", transportation: "Train", duration: "34 hours", cost: "₹3,000" },
    { source: "Shillong", destination: "Mumbai", transportation: "Flight", duration: "5 hours", cost: "₹7,000" },

    // Shillong to Imphal
    { source: "Shillong", destination: "Imphal", transportation: "Bus", duration: "12 hours", cost: "₹1,200" },
    { source: "Shillong", destination: "Imphal", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },

    // Shillong to Aizawl
    { source: "Shillong", destination: "Aizawl", transportation: "Bus", duration: "10 hours", cost: "₹1,000" },
    { source: "Shillong", destination: "Aizawl", transportation: "Flight", duration: "3 hours", cost: "₹4,500" },

    // Shillong to Kohima
    { source: "Shillong", destination: "Kohima", transportation: "Bus", duration: "8 hours", cost: "₹800" },
    { source: "Shillong", destination: "Kohima", transportation: "Flight", duration: "2.5 hours", cost: "₹4,200" },

    // Shillong to Bhubaneswar
    { source: "Shillong", destination: "Bhubaneswar", transportation: "Train", duration: "24 hours", cost: "₹2,000" },
    { source: "Shillong", destination: "Bhubaneswar", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Shillong to Chandigarh
    { source: "Shillong", destination: "Chandigarh", transportation: "Train", duration: "28 hours", cost: "₹2,500" },
    { source: "Shillong", destination: "Chandigarh", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Shillong to Jaipur
    { source: "Shillong", destination: "Jaipur", transportation: "Train", duration: "30 hours", cost: "₹2,800" },
    { source: "Shillong", destination: "Jaipur", transportation: "Flight", duration: "4 hours", cost: "₹6,500" },

    // Shillong to Gangtok
    { source: "Shillong", destination: "Gangtok", transportation: "Bus", duration: "14 hours", cost: "₹1,200" },
    { source: "Shillong", destination: "Gangtok", transportation: "Flight", duration: "3.5 hours", cost: "₹4,500" },

    // Shillong to Chennai
    { source: "Shillong", destination: "Chennai", transportation: "Train", duration: "38 hours", cost: "₹3,200" },
    { source: "Shillong", destination: "Chennai", transportation: "Flight", duration: "5.5 hours", cost: "₹7,000" },

    // Shillong to Hyderabad
    { source: "Shillong", destination: "Hyderabad", transportation: "Train", duration: "32 hours", cost: "₹2,800" },
    { source: "Shillong", destination: "Hyderabad", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Shillong to Agartala
    { source: "Shillong", destination: "Agartala", transportation: "Bus", duration: "12 hours", cost: "₹1,200" },
    { source: "Shillong", destination: "Agartala", transportation: "Flight", duration: "2.5 hours", cost: "₹4,000" },

    // Shillong to Lucknow
    { source: "Shillong", destination: "Lucknow", transportation: "Train", duration: "28 hours", cost: "₹2,500" },
    { source: "Shillong", destination: "Lucknow", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Shillong to Dehradun
    { source: "Shillong", destination: "Dehradun", transportation: "Train", duration: "30 hours", cost: "₹2,800" },
    { source: "Shillong", destination: "Dehradun", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Shillong to Kolkata
    { source: "Shillong", destination: "Kolkata", transportation: "Train", duration: "18 hours", cost: "₹1,800" },
    { source: "Shillong", destination: "Kolkata", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Shillong to Port Blair
    { source: "Shillong", destination: "Port Blair", transportation: "Flight", duration: "6 hours", cost: "₹8,000" },

    // Shillong to Daman
    { source: "Shillong", destination: "Daman", transportation: "Flight", duration: "5.5 hours", cost: "₹7,500" },

    // Shillong to Delhi
    { source: "Shillong", destination: "Delhi", transportation: "Train", duration: "30 hours", cost: "₹2,800" },
    { source: "Shillong", destination: "Delhi", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Shillong to Srinagar (Jammu in winter)
    { source: "Shillong", destination: "Srinagar", transportation: "Flight", duration: "6 hours", cost: "₹8,000" },
    { source: "Shillong", destination: "Jammu", transportation: "Train", duration: "36 hours", cost: "₹3,200" },
    { source: "Shillong", destination: "Jammu", transportation: "Flight", duration: "5.5 hours", cost: "₹7,000" },

    // Shillong to Kavaratti
    { source: "Shillong", destination: "Kavaratti", transportation: "Flight + Ship", duration: "10 hours", cost: "₹12,000" },

    // Shillong to Leh
    { source: "Shillong", destination: "Leh", transportation: "Flight", duration: "7 hours", cost: "₹9,000" },

    // Shillong to Puducherry
    { source: "Shillong", destination: "Puducherry", transportation: "Train", duration: "42 hours", cost: "₹3,500" },
    { source: "Shillong", destination: "Puducherry", transportation: "Flight", duration: "6 hours", cost: "₹7,500" },

    // Aizawl to Amaravati
    { source: "Aizawl", destination: "Amaravati", transportation: "Flight", duration: "4 hours", cost: "₹6,500" },
    { source: "Aizawl", destination: "Amaravati", transportation: "Taxi", duration: "34 hours", cost: "₹29,392" },

    // Aizawl to Itanagar
    { source: "Aizawl", destination: "Itanagar", transportation: "Bus", duration: "12 hours", cost: "₹1,200" },

    // Aizawl to Dispur
    { source: "Aizawl", destination: "Dispur", transportation: "Bus", duration: "10 hours", cost: "₹1,000" },

    // Aizawl to Patna
    { source: "Aizawl", destination: "Patna", transportation: "Train", duration: "24 hours", cost: "₹2,000" },

    // Aizawl to Raipur
    { source: "Aizawl", destination: "Raipur", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Aizawl to Panaji
    { source: "Aizawl", destination: "Panaji", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Aizawl to Gandhinagar
    { source: "Aizawl", destination: "Gandhinagar", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Aizawl to Chandigarh
    { source: "Aizawl", destination: "Chandigarh", transportation: "Flight", duration: "4 hours", cost: "₹6,200" },

    // Aizawl to Shimla
    { source: "Aizawl", destination: "Shimla", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Aizawl to Ranchi
    { source: "Aizawl", destination: "Ranchi", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Aizawl to Bengaluru
    { source: "Aizawl", destination: "Bengaluru", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Aizawl to Thiruvananthapuram
    { source: "Aizawl", destination: "Thiruvananthapuram", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Aizawl to Bhopal
    { source: "Aizawl", destination: "Bhopal", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Aizawl to Mumbai
    { source: "Aizawl", destination: "Mumbai", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Aizawl to Imphal
    { source: "Aizawl", destination: "Imphal", transportation: "Bus", duration: "7 hours", cost: "₹700" },

    // Aizawl to Shillong
    { source: "Aizawl", destination: "Shillong", transportation: "Bus", duration: "9 hours", cost: "₹900" },

    // Aizawl to Kohima
    { source: "Aizawl", destination: "Kohima", transportation: "Bus", duration: "8 hours", cost: "₹800" },

    // Aizawl to Bhubaneswar
    { source: "Aizawl", destination: "Bhubaneswar", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Aizawl to Jaipur
    { source: "Aizawl", destination: "Jaipur", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Aizawl to Gangtok
    { source: "Aizawl", destination: "Gangtok", transportation: "Bus", duration: "10 hours", cost: "₹1,000" },

    // Aizawl to Chennai
    { source: "Aizawl", destination: "Chennai", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Aizawl to Hyderabad
    { source: "Aizawl", destination: "Hyderabad", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Aizawl to Agartala
    { source: "Aizawl", destination: "Agartala", transportation: "Bus", duration: "6 hours", cost: "₹600" },

    // Aizawl to Lucknow
    { source: "Aizawl", destination: "Lucknow", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Aizawl to Dehradun
    { source: "Aizawl", destination: "Dehradun", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Aizawl to Kolkata
    { source: "Aizawl", destination: "Kolkata", transportation: "Flight", duration: "1.5 hours", cost: "₹4,500" },
    { source: "Aizawl", destination: "Kolkata", transportation: "Bus + Train", duration: "20 hours", cost: "₹2,000" },

    // Aizawl to Port Blair
    { source: "Aizawl", destination: "Port Blair", transportation: "Flight", duration: "6 hours (1 stop)", cost: "₹7,500" },

    // Aizawl to Chandigarh
    { source: "Aizawl", destination: "Chandigarh", transportation: "Flight", duration: "4.5 hours", cost: "₹6,200" },

    // Aizawl to Daman
    { source: "Aizawl", destination: "Daman", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Aizawl to Delhi
    { source: "Aizawl", destination: "Delhi", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Aizawl to Srinagar (Summer Capital of J&K)
    { source: "Aizawl", destination: "Srinagar", transportation: "Flight", duration: "5 hours (1 stop)", cost: "₹7,000" },

    // Aizawl to Jammu (Winter Capital of J&K)
    { source: "Aizawl", destination: "Jammu", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Aizawl to Kavaratti (Lakshadweep)
    { source: "Aizawl", destination: "Kavaratti", transportation: "Flight + Ship", duration: "2 days", cost: "₹10,000" },

    // Aizawl to Leh (Ladakh)
    { source: "Aizawl", destination: "Leh", transportation: "Flight", duration: "5.5 hours (1 stop)", cost: "₹8,000" },

    // Aizawl to Puducherry
    { source: "Aizawl", destination: "Puducherry", transportation: "Flight", duration: "4.5 hours (1 stop)", cost: "₹7,000" },

    // Kohima to Amaravati
    { source: "Kohima", destination: "Amaravati", transportation: "Flight", duration: "6 hours", cost: "₹7,500" },
    { source: "Kohima", destination: "Amaravati", transportation: "Train", duration: "48 hours", cost: "₹2,800" },
    { source: "Kohima", destination: "Amaravati", transportation: "Bus", duration: "60 hours", cost: "₹3,200" },

    // Kohima to Itanagar
    { source: "Kohima", destination: "Itanagar", transportation: "Bus", duration: "12 hours", cost: "₹1,200" },

    // Kohima to Dispur
    { source: "Kohima", destination: "Dispur", transportation: "Bus", duration: "8 hours", cost: "₹900" },

    // Kohima to Patna
    { source: "Kohima", destination: "Patna", transportation: "Train", duration: "36 hours", cost: "₹2,500" },
    { source: "Kohima", destination: "Patna", transportation: "Flight", duration: "5 hours", cost: "₹6,000" },

    // Kohima to Raipur
    { source: "Kohima", destination: "Raipur", transportation: "Train", duration: "40 hours", cost: "₹2,700" },
    { source: "Kohima", destination: "Raipur", transportation: "Flight", duration: "5.5 hours", cost: "₹6,200" },

    // Kohima to Panaji
    { source: "Kohima", destination: "Panaji", transportation: "Flight", duration: "7 hours", cost: "₹8,000" },
    { source: "Kohima", destination: "Panaji", transportation: "Train", duration: "50 hours", cost: "₹3,000" },

    // Kohima to Gandhinagar
    { source: "Kohima", destination: "Gandhinagar", transportation: "Flight", duration: "6.5 hours", cost: "₹7,800" },
    { source: "Kohima", destination: "Gandhinagar", transportation: "Train", duration: "48 hours", cost: "₹2,900" },

    // Kohima to Chandigarh
    { source: "Kohima", destination: "Chandigarh", transportation: "Flight", duration: "6 hours", cost: "₹7,500" },
    { source: "Kohima", destination: "Chandigarh", transportation: "Train", duration: "46 hours", cost: "₹2,850" },

    // Kohima to Shimla
    { source: "Kohima", destination: "Shimla", transportation: "Flight", duration: "6.5 hours", cost: "₹7,700" },
    { source: "Kohima", destination: "Shimla", transportation: "Train", duration: "48 hours", cost: "₹2,900" },

    // Kohima to Ranchi
    { source: "Kohima", destination: "Ranchi", transportation: "Train", duration: "38 hours", cost: "₹2,600" },
    { source: "Kohima", destination: "Ranchi", transportation: "Flight", duration: "5.5 hours", cost: "₹6,300" },

    // Kohima to Bengaluru
    { source: "Kohima", destination: "Bengaluru", transportation: "Flight", duration: "6.5 hours", cost: "₹7,800" },
    { source: "Kohima", destination: "Bengaluru", transportation: "Train", duration: "50 hours", cost: "₹3,000" },

    // Kohima to Thiruvananthapuram
    { source: "Kohima", destination: "Thiruvananthapuram", transportation: "Flight", duration: "7 hours", cost: "₹8,200" },
    { source: "Kohima", destination: "Thiruvananthapuram", transportation: "Train", duration: "52 hours", cost: "₹3,100" },

    // Kohima to Bhopal
    { source: "Kohima", destination: "Bhopal", transportation: "Flight", duration: "6 hours", cost: "₹7,500" },
    { source: "Kohima", destination: "Bhopal", transportation: "Train", duration: "45 hours", cost: "₹2,850" },

    // Kohima to Mumbai
    { source: "Kohima", destination: "Mumbai", transportation: "Flight", duration: "6.5 hours", cost: "₹7,800" },
    { source: "Kohima", destination: "Mumbai", transportation: "Train", duration: "48 hours", cost: "₹2,900" },

    // Kohima to Imphal
    { source: "Kohima", destination: "Imphal", transportation: "Bus", duration: "5 hours", cost: "₹500" },

    // Kohima to Shillong
    { source: "Kohima", destination: "Shillong", transportation: "Bus", duration: "10 hours", cost: "₹1,000" },

    // Kohima to Aizawl
    { source: "Kohima", destination: "Aizawl", transportation: "Bus", duration: "12 hours", cost: "₹1,200" },

    // Kohima to Bhubaneswar
    { source: "Kohima", destination: "Bhubaneswar", transportation: "Train", duration: "40 hours", cost: "₹2,700" },
    { source: "Kohima", destination: "Bhubaneswar", transportation: "Flight", duration: "5.5 hours", cost: "₹6,200" },

    // Kohima to Jaipur
    { source: "Kohima", destination: "Jaipur", transportation: "Flight", duration: "6 hours", cost: "₹7,500" },
    { source: "Kohima", destination: "Jaipur", transportation: "Train", duration: "46 hours", cost: "₹2,850" },

    // Kohima to Gangtok
    { source: "Kohima", destination: "Gangtok", transportation: "Bus", duration: "14 hours", cost: "₹1,400" },

    // Kohima to Chennai
    { source: "Kohima", destination: "Chennai", transportation: "Flight", duration: "6.5 hours", cost: "₹7,800" },
    { source: "Kohima", destination: "Chennai", transportation: "Train", duration: "50 hours", cost: "₹3,000" },

    // Kohima to Hyderabad
    { source: "Kohima", destination: "Hyderabad", transportation: "Flight", duration: "6 hours", cost: "₹7,500" },
    { source: "Kohima", destination: "Hyderabad", transportation: "Train", duration: "48 hours", cost: "₹2,900" },

    // Kohima to Agartala
    { source: "Kohima", destination: "Agartala", transportation: "Bus", duration: "15 hours", cost: "₹1,500" },

    // Kohima to Lucknow
    { source: "Kohima", destination: "Lucknow", transportation: "Flight", duration: "5.5 hours", cost: "₹6,300" },
    { source: "Kohima", destination: "Lucknow", transportation: "Train", duration: "38 hours", cost: "₹2,600" },

    // Kohima to Dehradun
    { source: "Kohima", destination: "Dehradun", transportation: "Flight", duration: "6 hours", cost: "₹7,500" },
    { source: "Kohima", destination: "Dehradun", transportation: "Train", duration: "45 hours", cost: "₹2,850" },

    // Kohima to Kolkata
    { source: "Kohima", destination: "Kolkata", transportation: "Train", duration: "20 hours", cost: "₹1,500" },
    { source: "Kohima", destination: "Kolkata", transportation: "Flight", duration: "2 hours", cost: "₹4,500" },

    // Kohima to Port Blair
    { source: "Kohima", destination: "Port Blair", transportation: "Flight", duration: "8 hours", cost: "₹9,000" },

    // Kohima to Chandigarh
    { source: "Kohima", destination: "Chandigarh", transportation: "Flight", duration: "6.5 hours", cost: "₹7,800" },

    // Kohima to Daman
    { source: "Kohima", destination: "Daman", transportation: "Flight", duration: "7 hours", cost: "₹8,200" },

    // Kohima to Delhi
    { source: "Kohima", destination: "Delhi", transportation: "Flight", duration: "5.5 hours", cost: "₹6,800" },
    { source: "Kohima", destination: "Delhi", transportation: "Train", duration: "42 hours", cost: "₹2,700" },

    // Kohima to Srinagar (Summer) / Jammu (Winter)
    { source: "Kohima", destination: "Srinagar", transportation: "Flight", duration: "7 hours", cost: "₹8,500" },
    { source: "Kohima", destination: "Jammu", transportation: "Flight", duration: "6.5 hours", cost: "₹8,200" },

    // Kohima to Kavaratti
    { source: "Kohima", destination: "Kavaratti", transportation: "Flight + Ship", duration: "12 hours", cost: "₹10,000" },

    // Kohima to Leh (Ladakh)
    { source: "Kohima", destination: "Leh", transportation: "Flight", duration: "8 hours", cost: "₹9,500" },

    // Kohima to Puducherry
    { source: "Kohima", destination: "Puducherry", transportation: "Flight", duration: "7.5 hours", cost: "₹8,000" },
    { source: "Kohima", destination: "Puducherry", transportation: "Train", duration: "52 hours", cost: "₹3,100" },

    // Bhubaneswar to Amaravati
    { source: "Bhubaneswar", destination: "Amaravati", transportation: "Train", duration: "17 hours", cost: "₹1,600" },
    { source: "Bhubaneswar", destination: "Amaravati", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },

    // Bhubaneswar to Itanagar
    { source: "Bhubaneswar", destination: "Itanagar", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Bhubaneswar to Dispur
    { source: "Bhubaneswar", destination: "Dispur", transportation: "Train", duration: "22 hours", cost: "₹1,800" },
    { source: "Bhubaneswar", destination: "Dispur", transportation: "Flight", duration: "3 hours", cost: "₹4,500" },

    // Bhubaneswar to Patna
    { source: "Bhubaneswar", destination: "Patna", transportation: "Train", duration: "14 hours", cost: "₹1,400" },
    { source: "Bhubaneswar", destination: "Patna", transportation: "Flight", duration: "1.5 hours", cost: "₹3,000" },

    // Bhubaneswar to Raipur
    { source: "Bhubaneswar", destination: "Raipur", transportation: "Bus", duration: "12 hours", cost: "₹1,000" },
    { source: "Bhubaneswar", destination: "Raipur", transportation: "Train", duration: "10 hours", cost: "₹900" },
    { source: "Bhubaneswar", destination: "Raipur", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },

    // Bhubaneswar to Panaji
    { source: "Bhubaneswar", destination: "Panaji", transportation: "Train", duration: "24 hours", cost: "₹2,200" },
    { source: "Bhubaneswar", destination: "Panaji", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Bhubaneswar to Gandhinagar
    { source: "Bhubaneswar", destination: "Gandhinagar", transportation: "Train", duration: "30 hours", cost: "₹2,800" },
    { source: "Bhubaneswar", destination: "Gandhinagar", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Bhubaneswar to Chandigarh
    { source: "Bhubaneswar", destination: "Chandigarh", transportation: "Train", duration: "32 hours", cost: "₹3,000" },
    { source: "Bhubaneswar", destination: "Chandigarh", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Bhubaneswar to Shimla
    { source: "Bhubaneswar", destination: "Shimla", transportation: "Train", duration: "34 hours", cost: "₹3,200" },
    { source: "Bhubaneswar", destination: "Shimla", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Bhubaneswar to Ranchi
    { source: "Bhubaneswar", destination: "Ranchi", transportation: "Bus", duration: "10 hours", cost: "₹800" },
    { source: "Bhubaneswar", destination: "Ranchi", transportation: "Train", duration: "8 hours", cost: "₹700" },
    { source: "Bhubaneswar", destination: "Ranchi", transportation: "Flight", duration: "1 hour", cost: "₹2,000" },

    // Bhubaneswar to Bengaluru
    { source: "Bhubaneswar", destination: "Bengaluru", transportation: "Train", duration: "20 hours", cost: "₹1,800" },
    { source: "Bhubaneswar", destination: "Bengaluru", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },

    // Bhubaneswar to Thiruvananthapuram
    { source: "Bhubaneswar", destination: "Thiruvananthapuram", transportation: "Train", duration: "26 hours", cost: "₹2,400" },
    { source: "Bhubaneswar", destination: "Thiruvananthapuram", transportation: "Flight", duration: "3 hours", cost: "₹5,200" },

    // Bhubaneswar to Bhopal
    { source: "Bhubaneswar", destination: "Bhopal", transportation: "Train", duration: "18 hours", cost: "₹1,600" },
    { source: "Bhubaneswar", destination: "Bhopal", transportation: "Flight", duration: "2 hours", cost: "₹3,800" },

    // Bhubaneswar to Mumbai
    { source: "Bhubaneswar", destination: "Mumbai", transportation: "Train", duration: "22 hours", cost: "₹2,000" },
    { source: "Bhubaneswar", destination: "Mumbai", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Bhubaneswar to Imphal
    { source: "Bhubaneswar", destination: "Imphal", transportation: "Flight", duration: "4 hours", cost: "₹6,200" },

    // Bhubaneswar to Shillong
    { source: "Bhubaneswar", destination: "Shillong", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Bhubaneswar to Aizawl
    { source: "Bhubaneswar", destination: "Aizawl", transportation: "Flight", duration: "4 hours", cost: "₹6,300" },

    // Bhubaneswar to Kohima
    { source: "Bhubaneswar", destination: "Kohima", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Bhubaneswar to Jaipur
    { source: "Bhubaneswar", destination: "Jaipur", transportation: "Train", duration: "24 hours", cost: "₹2,500" },
    { source: "Bhubaneswar", destination: "Jaipur", transportation: "Flight", duration: "2.5 hours", cost: "₹4,800" },

    // Bhubaneswar to Gangtok
    { source: "Bhubaneswar", destination: "Gangtok", transportation: "Train + Bus", duration: "18 hours", cost: "₹2,200" },
    { source: "Bhubaneswar", destination: "Gangtok", transportation: "Flight", duration: "3.5 hours", cost: "₹5,000" },

    // Bhubaneswar to Chennai
    { source: "Bhubaneswar", destination: "Chennai", transportation: "Train", duration: "18 hours", cost: "₹1,800" },
    { source: "Bhubaneswar", destination: "Chennai", transportation: "Flight", duration: "2 hours", cost: "₹3,800" },

    // Bhubaneswar to Hyderabad
    { source: "Bhubaneswar", destination: "Hyderabad", transportation: "Train", duration: "16 hours", cost: "₹1,600" },
    { source: "Bhubaneswar", destination: "Hyderabad", transportation: "Flight", duration: "1.5 hours", cost: "₹3,500" },

    // Bhubaneswar to Agartala
    { source: "Bhubaneswar", destination: "Agartala", transportation: "Train", duration: "22 hours", cost: "₹2,000" },
    { source: "Bhubaneswar", destination: "Agartala", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Bhubaneswar to Lucknow
    { source: "Bhubaneswar", destination: "Lucknow", transportation: "Train", duration: "14 hours", cost: "₹1,500" },
    { source: "Bhubaneswar", destination: "Lucknow", transportation: "Flight", duration: "2 hours", cost: "₹3,800" },

    // Bhubaneswar to Dehradun
    { source: "Bhubaneswar", destination: "Dehradun", transportation: "Train", duration: "26 hours", cost: "₹2,600" },
    { source: "Bhubaneswar", destination: "Dehradun", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Bhubaneswar to Kolkata
    { source: "Bhubaneswar", destination: "Kolkata", transportation: "Train", duration: "6 hours", cost: "₹800" },
    { source: "Bhubaneswar", destination: "Kolkata", transportation: "Flight", duration: "1 hour", cost: "₹2,500" },

    // Bhubaneswar to Port Blair
    { source: "Bhubaneswar", destination: "Port Blair", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Bhubaneswar to Chandigarh
    { source: "Bhubaneswar", destination: "Chandigarh", transportation: "Train", duration: "28 hours", cost: "₹2,800" },
    { source: "Bhubaneswar", destination: "Chandigarh", transportation: "Flight", duration: "4 hours", cost: "₹6,200" },

    // Bhubaneswar to Daman
    { source: "Bhubaneswar", destination: "Daman", transportation: "Flight", duration: "5 hours", cost: "₹7,000" },

    // Bhubaneswar to Delhi
    { source: "Bhubaneswar", destination: "Delhi", transportation: "Train", duration: "24 hours", cost: "₹2,500" },
    { source: "Bhubaneswar", destination: "Delhi", transportation: "Flight", duration: "2.5 hours", cost: "₹4,800" },

    // Bhubaneswar to Srinagar (Summer) / Jammu (Winter)
    { source: "Bhubaneswar", destination: "Srinagar", transportation: "Flight", duration: "4.5 hours", cost: "₹7,000" },
    { source: "Bhubaneswar", destination: "Jammu", transportation: "Flight", duration: "4 hours", cost: "₹6,800" },

    // Bhubaneswar to Kavaratti
    { source: "Bhubaneswar", destination: "Kavaratti", transportation: "Flight + Ship", duration: "10 hours", cost: "₹9,000" },

    // Bhubaneswar to Leh (Ladakh)
    { source: "Bhubaneswar", destination: "Leh", transportation: "Flight", duration: "5 hours", cost: "₹7,500" },

    // Bhubaneswar to Puducherry
    { source: "Bhubaneswar", destination: "Puducherry", transportation: "Train", duration: "22 hours", cost: "₹2,400" },
    { source: "Bhubaneswar", destination: "Puducherry", transportation: "Flight", duration: "3 hours", cost: "₹5,200" },

    // Jaipur to Amaravati
    { source: "Jaipur", destination: "Amaravati", transportation: "Train", duration: "19 hours 58 minutes", cost: "₹1,084" },
    { source: "Jaipur", destination: "Amaravati", transportation: "Flight", duration: "4 hours 45 minutes", cost: "₹3,200" },

    // Jaipur to Itanagar
    { source: "Jaipur", destination: "Itanagar", transportation: "Flight", duration: "5 hours 30 minutes", cost: "₹5,500" },

    // Jaipur to Dispur
    { source: "Jaipur", destination: "Dispur", transportation: "Flight", duration: "4 hours 15 minutes", cost: "₹4,800" },

    // Jaipur to Patna
    { source: "Jaipur", destination: "Patna", transportation: "Train", duration: "17 hours 30 minutes", cost: "₹1,200" },
    { source: "Jaipur", destination: "Patna", transportation: "Flight", duration: "2 hours 30 minutes", cost: "₹3,500" },

    // Jaipur to Raipur
    { source: "Jaipur", destination: "Raipur", transportation: "Train", duration: "20 hours", cost: "₹1,400" },
    { source: "Jaipur", destination: "Raipur", transportation: "Flight", duration: "3 hours", cost: "₹3,800" },

    // Jaipur to Panaji
    { source: "Jaipur", destination: "Panaji", transportation: "Train", duration: "25 hours", cost: "₹1,800" },
    { source: "Jaipur", destination: "Panaji", transportation: "Flight", duration: "2 hours 15 minutes", cost: "₹4,200" },

    // Jaipur to Gandhinagar
    { source: "Jaipur", destination: "Gandhinagar", transportation: "Train", duration: "12 hours", cost: "₹1,000" },
    { source: "Jaipur", destination: "Gandhinagar", transportation: "Flight", duration: "1 hour 30 minutes", cost: "₹2,800" },

    // Jaipur to Chandigarh
    { source: "Jaipur", destination: "Chandigarh", transportation: "Train", duration: "10 hours", cost: "₹900" },
    { source: "Jaipur", destination: "Chandigarh", transportation: "Flight", duration: "1 hour 15 minutes", cost: "₹2,500" },

    // Jaipur to Shimla
    { source: "Jaipur", destination: "Shimla", transportation: "Train", duration: "12 hours 30 minutes", cost: "₹1,100" },
    { source: "Jaipur", destination: "Shimla", transportation: "Flight", duration: "2 hours", cost: "₹3,000" },

    // Jaipur to Ranchi
    { source: "Jaipur", destination: "Ranchi", transportation: "Train", duration: "18 hours", cost: "₹1,300" },
    { source: "Jaipur", destination: "Ranchi", transportation: "Flight", duration: "2 hours 45 minutes", cost: "₹3,600" },

    // Jaipur to Bengaluru
    { source: "Jaipur", destination: "Bengaluru", transportation: "Train", duration: "36 hours", cost: "₹2,500" },
    { source: "Jaipur", destination: "Bengaluru", transportation: "Flight", duration: "2 hours 30 minutes", cost: "₹4,000" },

    // Jaipur to Thiruvananthapuram
    { source: "Jaipur", destination: "Thiruvananthapuram", transportation: "Train", duration: "42 hours", cost: "₹3,000" },
    { source: "Jaipur", destination: "Thiruvananthapuram", transportation: "Flight", duration: "3 hours 15 minutes", cost: "₹4,500" },

    // Jaipur to Bhopal
    { source: "Jaipur", destination: "Bhopal", transportation: "Train", duration: "12 hours", cost: "₹1,000" },
    { source: "Jaipur", destination: "Bhopal", transportation: "Flight", duration: "1 hour 15 minutes", cost: "₹2,500" },

    // Jaipur to Mumbai
    { source: "Jaipur", destination: "Mumbai", transportation: "Train", duration: "17 hours", cost: "₹1,500" },
    { source: "Jaipur", destination: "Mumbai", transportation: "Flight", duration: "1 hour 45 minutes", cost: "₹3,200" },

    // Jaipur to Imphal
    { source: "Jaipur", destination: "Imphal", transportation: "Flight", duration: "5 hours", cost: "₹5,800" },

    // Jaipur to Shillong
    { source: "Jaipur", destination: "Shillong", transportation: "Flight", duration: "4 hours 45 minutes", cost: "₹5,500" },

    // Jaipur to Aizawl
    { source: "Jaipur", destination: "Aizawl", transportation: "Flight", duration: "5 hours 15 minutes", cost: "₹5,700" },

    // Jaipur to Kohima
    { source: "Jaipur", destination: "Kohima", transportation: "Flight", duration: "5 hours 30 minutes", cost: "₹5,900" },

    // Jaipur to Bhubaneswar
    { source: "Jaipur", destination: "Bhubaneswar", transportation: "Train", duration: "24 hours", cost: "₹2,000" },
    { source: "Jaipur", destination: "Bhubaneswar", transportation: "Flight", duration: "2 hours 30 minutes", cost: "₹3,800" },

    // Jaipur to Gangtok
    { source: "Jaipur", destination: "Gangtok", transportation: "Flight", duration: "5 hours", cost: "₹5,600" },

    // Jaipur to Chennai
    { source: "Jaipur", destination: "Chennai", transportation: "Train", duration: "36 hours", cost: "₹2,500" },
    { source: "Jaipur", destination: "Chennai", transportation: "Flight", duration: "2 hours 45 minutes", cost: "₹4,000" },

    // Jaipur to Hyderabad
    { source: "Jaipur", destination: "Hyderabad", transportation: "Train", duration: "24 hours", cost: "₹2,000" },
    { source: "Jaipur", destination: "Hyderabad", transportation: "Flight", duration: "2 hours 30 minutes", cost: "₹3,800" },

    // Jaipur to Agartala
    { source: "Jaipur", destination: "Agartala", transportation: "Flight", duration: "5 hours 30 minutes", cost: "₹5,900" },

    // Jaipur to Lucknow
    { source: "Jaipur", destination: "Lucknow", transportation: "Train", duration: "10 hours", cost: "₹900" },
    { source: "Jaipur", destination: "Lucknow", transportation: "Flight", duration: "1 hour 15 minutes", cost: "₹2,500" },

    // Jaipur to Dehradun
    { source: "Jaipur", destination: "Dehradun", transportation: "Train", duration: "12 hours", cost: "₹1,100" },
    { source: "Jaipur", destination: "Dehradun", transportation: "Flight", duration: "2 hours", cost: "₹3,000" },

    // Jaipur to Kolkata
    { source: "Jaipur", destination: "Kolkata", transportation: "Train", duration: "24 hours", cost: "₹2,000" },
    { source: "Jaipur", destination: "Kolkata", transportation: "Flight", duration: "2 hours 30 minutes", cost: "₹3,800" },

    // Jaipur to Port Blair
    { source: "Jaipur", destination: "Port Blair", transportation: "Flight", duration: "5 hours 45 minutes", cost: "₹6,200" },

    // Jaipur to Chandigarh
    { source: "Jaipur", destination: "Chandigarh", transportation: "Train", duration: "10 hours", cost: "₹900" },
    { source: "Jaipur", destination: "Chandigarh", transportation: "Flight", duration: "1 hour 15 minutes", cost: "₹2,500" },

    // Jaipur to Daman
    { source: "Jaipur", destination: "Daman", transportation: "Train", duration: "17 hours", cost: "₹1,500" },
    { source: "Jaipur", destination: "Daman", transportation: "Flight", duration: "2 hours 30 minutes", cost: "₹3,800" },

    // Jaipur to Delhi
    { source: "Jaipur", destination: "Delhi", transportation: "Train", duration: "5 hours", cost: "₹600" },
    { source: "Jaipur", destination: "Delhi", transportation: "Flight", duration: "1 hour", cost: "₹2,000" },

    // Jaipur to Srinagar
    { source: "Jaipur", destination: "Srinagar", transportation: "Flight", duration: "3 hours", cost: "₹4,500" },

    // Jaipur to Jammu
    { source: "Jaipur", destination: "Jammu", transportation: "Train", duration: "15 hours", cost: "₹1,200" },
    { source: "Jaipur", destination: "Jammu", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },

    // Jaipur to Kavaratti
    { source: "Jaipur", destination: "Kavaratti", transportation: "Flight + Ship", duration: "10 hours", cost: "₹7,000" },

    // Jaipur to Leh
    { source: "Jaipur", destination: "Leh", transportation: "Flight", duration: "3 hours 30 minutes", cost: "₹5,000" },

    // Jaipur to Puducherry
    { source: "Jaipur", destination: "Puducherry", transportation: "Train", duration: "40 hours", cost: "₹3,500" },
    { source: "Jaipur", destination: "Puducherry", transportation: "Flight", duration: "3 hours 45 minutes", cost: "₹5,200" },

    // Gangtok to Itanagar
    { source: "Gangtok", destination: "Itanagar", transportation: "Bus", duration: "15 hours", cost: "₹1,200" },
    { source: "Gangtok", destination: "Itanagar", transportation: "Train", duration: "12 hours", cost: "₹1,000" },
    { source: "Gangtok", destination: "Itanagar", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },

    // Gangtok to Dispur
    { source: "Gangtok", destination: "Dispur", transportation: "Bus", duration: "14 hours", cost: "₹1,100" },
    { source: "Gangtok", destination: "Dispur", transportation: "Train", duration: "11 hours", cost: "₹900" },
    { source: "Gangtok", destination: "Dispur", transportation: "Flight", duration: "1.5 hours", cost: "₹3,200" },

    // Gangtok to Patna
    { source: "Gangtok", destination: "Patna", transportation: "Bus", duration: "16 hours", cost: "₹1,300" },
    { source: "Gangtok", destination: "Patna", transportation: "Train", duration: "13 hours", cost: "₹1,100" },
    { source: "Gangtok", destination: "Patna", transportation: "Flight", duration: "2 hours", cost: "₹3,800" },

    // Gangtok to Raipur
    { source: "Gangtok", destination: "Raipur", transportation: "Bus", duration: "20 hours", cost: "₹1,500" },
    { source: "Gangtok", destination: "Raipur", transportation: "Train", duration: "18 hours", cost: "₹1,400" },
    { source: "Gangtok", destination: "Raipur", transportation: "Flight", duration: "2.5 hours", cost: "₹4,200" },

    // Gangtok to Panaji
    { source: "Gangtok", destination: "Panaji", transportation: "Bus", duration: "22 hours", cost: "₹1,600" },
    { source: "Gangtok", destination: "Panaji", transportation: "Train", duration: "20 hours", cost: "₹1,500" },
    { source: "Gangtok", destination: "Panaji", transportation: "Flight", duration: "3 hours", cost: "₹4,500" },

    // Gangtok to Gandhinagar
    { source: "Gangtok", destination: "Gandhinagar", transportation: "Bus", duration: "21 hours", cost: "₹1,550" },
    { source: "Gangtok", destination: "Gandhinagar", transportation: "Train", duration: "19 hours", cost: "₹1,450" },
    { source: "Gangtok", destination: "Gandhinagar", transportation: "Flight", duration: "2.5 hours", cost: "₹4,300" },

    // Gangtok to Chandigarh
    { source: "Gangtok", destination: "Chandigarh", transportation: "Bus", duration: "23 hours", cost: "₹1,700" },
    { source: "Gangtok", destination: "Chandigarh", transportation: "Train", duration: "21 hours", cost: "₹1,600" },
    { source: "Gangtok", destination: "Chandigarh", transportation: "Flight", duration: "3 hours", cost: "₹4,600" },

    // Gangtok to Shimla
    { source: "Gangtok", destination: "Shimla", transportation: "Bus", duration: "24 hours", cost: "₹1,800" },
    { source: "Gangtok", destination: "Shimla", transportation: "Train", duration: "22 hours", cost: "₹1,700" },
    { source: "Gangtok", destination: "Shimla", transportation: "Flight", duration: "3.5 hours", cost: "₹4,800" },

    // Gangtok to Ranchi
    { source: "Gangtok", destination: "Ranchi", transportation: "Bus", duration: "18 hours", cost: "₹1,400" },
    { source: "Gangtok", destination: "Ranchi", transportation: "Train", duration: "16 hours", cost: "₹1,300" },
    { source: "Gangtok", destination: "Ranchi", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },

    // Gangtok to Bengaluru
    { source: "Gangtok", destination: "Bengaluru", transportation: "Bus", duration: "25 hours", cost: "₹1,900" },
    { source: "Gangtok", destination: "Bengaluru", transportation: "Train", duration: "23 hours", cost: "₹1,800" },
    { source: "Gangtok", destination: "Bengaluru", transportation: "Flight", duration: "3.5 hours", cost: "₹5,000" },

    // Gangtok to Thiruvananthapuram
    { source: "Gangtok", destination: "Thiruvananthapuram", transportation: "Bus", duration: "27 hours", cost: "₹2,000" },
    { source: "Gangtok", destination: "Thiruvananthapuram", transportation: "Train", duration: "25 hours", cost: "₹1,900" },
    { source: "Gangtok", destination: "Thiruvananthapuram", transportation: "Flight", duration: "4 hours", cost: "₹5,200" },

    // Gangtok to Bhopal
    { source: "Gangtok", destination: "Bhopal", transportation: "Bus", duration: "19 hours", cost: "₹1,450" },
    { source: "Gangtok", destination: "Bhopal", transportation: "Train", duration: "17 hours", cost: "₹1,350" },
    { source: "Gangtok", destination: "Bhopal", transportation: "Flight", duration: "2.5 hours", cost: "₹4,100" },

    // Gangtok to Mumbai
    { source: "Gangtok", destination: "Mumbai", transportation: "Bus", duration: "26 hours", cost: "₹1,950" },
    { source: "Gangtok", destination: "Mumbai", transportation: "Train", duration: "24 hours", cost: "₹1,850" },
    { source: "Gangtok", destination: "Mumbai", transportation: "Flight", duration: "4 hours", cost: "₹5,300" },

    // Gangtok to Imphal
    { source: "Gangtok", destination: "Imphal", transportation: "Bus", duration: "16 hours", cost: "₹1,200" },
    { source: "Gangtok", destination: "Imphal", transportation: "Train", duration: "14 hours", cost: "₹1,000" },
    { source: "Gangtok", destination: "Imphal", transportation: "Flight", duration: "2 hours", cost: "₹3,600" },

    // Gangtok to Shillong
    { source: "Gangtok", destination: "Shillong", transportation: "Bus", duration: "14 hours", cost: "₹1,100" },
    { source: "Gangtok", destination: "Shillong", transportation: "Train", duration: "12 hours", cost: "₹900" },
    { source: "Gangtok", destination: "Shillong", transportation: "Flight", duration: "1.5 hours", cost: "₹3,500" },

    // Gangtok to Aizawl
    { source: "Gangtok", destination: "Aizawl", transportation: "Bus", duration: "17 hours", cost: "₹1,300" },
    { source: "Gangtok", destination: "Aizawl", transportation: "Train", duration: "15 hours", cost: "₹1,100" },
    { source: "Gangtok", destination: "Aizawl", transportation: "Flight", duration: "2 hours", cost: "₹3,800" },

    // Gangtok to Kohima
    { source: "Gangtok", destination: "Kohima", transportation: "Bus", duration: "19 hours", cost: "₹1,400" },
    { source: "Gangtok", destination: "Kohima", transportation: "Train", duration: "17 hours", cost: "₹1,200" },
    { source: "Gangtok", destination: "Kohima", transportation: "Flight", duration: "2.5 hours", cost: "₹4,000" },

    // Gangtok to Bhubaneswar
    { source: "Gangtok", destination: "Bhubaneswar", transportation: "Bus", duration: "18 hours", cost: "₹1,400" },
    { source: "Gangtok", destination: "Bhubaneswar", transportation: "Train", duration: "16 hours", cost: "₹1,250" },
    { source: "Gangtok", destination: "Bhubaneswar", transportation: "Flight", duration: "2.5 hours", cost: "₹4,100" },

    // Gangtok to Chandigarh
    { source: "Gangtok", destination: "Chandigarh", transportation: "Bus", duration: "23 hours", cost: "₹1,700" },
    { source: "Gangtok", destination: "Chandigarh", transportation: "Train", duration: "21 hours", cost: "₹1,600" },
    { source: "Gangtok", destination: "Chandigarh", transportation: "Flight", duration: "3 hours", cost: "₹4,600" },

    // Gangtok to Jaipur
    { source: "Gangtok", destination: "Jaipur", transportation: "Bus", duration: "20 hours", cost: "₹1,500" },
    { source: "Gangtok", destination: "Jaipur", transportation: "Train", duration: "18 hours", cost: "₹1,400" },
    { source: "Gangtok", destination: "Jaipur", transportation: "Flight", duration: "3 hours", cost: "₹4,300" },

    // Gangtok to Chennai
    { source: "Gangtok", destination: "Chennai", transportation: "Bus", duration: "26 hours", cost: "₹1,800" },
    { source: "Gangtok", destination: "Chennai", transportation: "Train", duration: "24 hours", cost: "₹1,700" },
    { source: "Gangtok", destination: "Chennai", transportation: "Flight", duration: "4 hours", cost: "₹5,200" },

    // Gangtok to Hyderabad
    { source: "Gangtok", destination: "Hyderabad", transportation: "Bus", duration: "27 hours", cost: "₹2,000" },
    { source: "Gangtok", destination: "Hyderabad", transportation: "Train", duration: "25 hours", cost: "₹1,900" },
    { source: "Gangtok", destination: "Hyderabad", transportation: "Flight", duration: "4 hours", cost: "₹5,400" },

    // Gangtok to Agartala
    { source: "Gangtok", destination: "Agartala", transportation: "Bus", duration: "12 hours", cost: "₹1,000" },
    { source: "Gangtok", destination: "Agartala", transportation: "Train", duration: "10 hours", cost: "₹800" },
    { source: "Gangtok", destination: "Agartala", transportation: "Flight", duration: "1.5 hours", cost: "₹3,200" },

    // Gangtok to Lucknow
    { source: "Gangtok", destination: "Lucknow", transportation: "Bus", duration: "24 hours", cost: "₹1,800" },
    { source: "Gangtok", destination: "Lucknow", transportation: "Train", duration: "22 hours", cost: "₹1,700" },
    { source: "Gangtok", destination: "Lucknow", transportation: "Flight", duration: "3 hours", cost: "₹4,500" },

    // Gangtok to Dehradun
    { source: "Gangtok", destination: "Dehradun", transportation: "Bus", duration: "19 hours", cost: "₹1,450" },
    { source: "Gangtok", destination: "Dehradun", transportation: "Train", duration: "17 hours", cost: "₹1,350" },
    { source: "Gangtok", destination: "Dehradun", transportation: "Flight", duration: "2.5 hours", cost: "₹4,200" },

    // Gangtok to Kolkata
    { source: "Gangtok", destination: "Kolkata", transportation: "Bus", duration: "13 hours", cost: "₹1,000" },
    { source: "Gangtok", destination: "Kolkata", transportation: "Train", duration: "11 hours", cost: "₹900" },
    { source: "Gangtok", destination: "Kolkata", transportation: "Flight", duration: "1 hour", cost: "₹3,000" },

    // Gangtok to Port Blair
    { source: "Gangtok", destination: "Port Blair", transportation: "Bus", duration: "28 hours", cost: "₹2,100" },
    { source: "Gangtok", destination: "Port Blair", transportation: "Train", duration: "26 hours", cost: "₹2,000" },
    { source: "Gangtok", destination: "Port Blair", transportation: "Flight", duration: "5 hours", cost: "₹6,000" },

    // Gangtok to Daman
    { source: "Gangtok", destination: "Daman", transportation: "Bus", duration: "22 hours", cost: "₹1,600" },
    { source: "Gangtok", destination: "Daman", transportation: "Train", duration: "20 hours", cost: "₹1,500" },
    { source: "Gangtok", destination: "Daman", transportation: "Flight", duration: "4 hours", cost: "₹5,300" },

    // Gangtok to Delhi
    { source: "Gangtok", destination: "Delhi", transportation: "Bus", duration: "23 hours", cost: "₹1,700" },
    { source: "Gangtok", destination: "Delhi", transportation: "Train", duration: "21 hours", cost: "₹1,600" },
    { source: "Gangtok", destination: "Delhi", transportation: "Flight", duration: "3 hours", cost: "₹4,800" },

    // Gangtok to Srinagar
    { source: "Gangtok", destination: "Srinagar", transportation: "Bus", duration: "30 hours", cost: "₹2,200" },
    { source: "Gangtok", destination: "Srinagar", transportation: "Train", duration: "28 hours", cost: "₹2,100" },
    { source: "Gangtok", destination: "Srinagar", transportation: "Flight", duration: "5 hours", cost: "₹6,500" },

    // Gangtok to Kavaratti
    { source: "Gangtok", destination: "Kavaratti", transportation: "Bus", duration: "31 hours", cost: "₹2,300" },
    { source: "Gangtok", destination: "Kavaratti", transportation: "Train", duration: "29 hours", cost: "₹2,200" },
    { source: "Gangtok", destination: "Kavaratti", transportation: "Flight", duration: "6 hours", cost: "₹7,000" },

    // Gangtok to Leh (Ladakh)
    { source: "Gangtok", destination: "Leh", transportation: "Bus", duration: "28 hours", cost: "₹2,200" },
    { source: "Gangtok", destination: "Leh", transportation: "Train", duration: "26 hours", cost: "₹2,000" },
    { source: "Gangtok", destination: "Leh", transportation: "Flight", duration: "5 hours", cost: "₹6,200" },

    // Gangtok to Puducherry
    { source: "Gangtok", destination: "Puducherry", transportation: "Bus", duration: "27 hours", cost: "₹2,000" },
    { source: "Gangtok", destination: "Puducherry", transportation: "Train", duration: "25 hours", cost: "₹1,900" },
    { source: "Gangtok", destination: "Puducherry", transportation: "Flight", duration: "4.5 hours", cost: "₹5,500" },

    // Chennai to Amaravati
    { source: "Chennai", destination: "Amaravati", transportation: "Bus", duration: "8 hours", cost: "₹700" },
    { source: "Chennai", destination: "Amaravati", transportation: "Train", duration: "7 hours", cost: "₹650" },
    { source: "Chennai", destination: "Amaravati", transportation: "Flight", duration: "1 hour", cost: "₹2,000" },

    // Chennai to Itanagar
    { source: "Chennai", destination: "Itanagar", transportation: "Flight", duration: "4.5 hours", cost: "₹7,500" },

    // Chennai to Dispur
    { source: "Chennai", destination: "Dispur", transportation: "Flight", duration: "4 hours", cost: "₹6,800" },

    // Chennai to Patna
    { source: "Chennai", destination: "Patna", transportation: "Train", duration: "30 hours", cost: "₹2,200" },
    { source: "Chennai", destination: "Patna", transportation: "Flight", duration: "3 hours", cost: "₹4,500" },

    // Chennai to Raipur
    { source: "Chennai", destination: "Raipur", transportation: "Bus", duration: "16 hours", cost: "₹1,200" },
    { source: "Chennai", destination: "Raipur", transportation: "Train", duration: "15 hours", cost: "₹1,100" },
    { source: "Chennai", destination: "Raipur", transportation: "Flight", duration: "2 hours", cost: "₹3,000" },

    // Chennai to Panaji
    { source: "Chennai", destination: "Panaji", transportation: "Bus", duration: "14 hours", cost: "₹1,100" },
    { source: "Chennai", destination: "Panaji", transportation: "Train", duration: "13 hours", cost: "₹1,000" },
    { source: "Chennai", destination: "Panaji", transportation: "Flight", duration: "1.5 hours", cost: "₹3,500" },

    // Chennai to Gandhinagar
    { source: "Chennai", destination: "Gandhinagar", transportation: "Train", duration: "28 hours", cost: "₹2,500" },
    { source: "Chennai", destination: "Gandhinagar", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Chennai to Chandigarh
    { source: "Chennai", destination: "Chandigarh", transportation: "Train", duration: "34 hours", cost: "₹3,000" },
    { source: "Chennai", destination: "Chandigarh", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Chennai to Shimla
    { source: "Chennai", destination: "Shimla", transportation: "Train", duration: "36 hours", cost: "₹3,200" },
    { source: "Chennai", destination: "Shimla", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Chennai to Ranchi
    { source: "Chennai", destination: "Ranchi", transportation: "Train", duration: "28 hours", cost: "₹2,400" },
    { source: "Chennai", destination: "Ranchi", transportation: "Flight", duration: "3.5 hours", cost: "₹5,200" },

    // Chennai to Bengaluru
    { source: "Chennai", destination: "Bengaluru", transportation: "Bus", duration: "6 hours", cost: "₹500" },
    { source: "Chennai", destination: "Bengaluru", transportation: "Train", duration: "5 hours", cost: "₹450" },
    { source: "Chennai", destination: "Bengaluru", transportation: "Flight", duration: "1 hour", cost: "₹2,000" },

    // Chennai to Thiruvananthapuram
    { source: "Chennai", destination: "Thiruvananthapuram", transportation: "Bus", duration: "12 hours", cost: "₹900" },
    { source: "Chennai", destination: "Thiruvananthapuram", transportation: "Train", duration: "11 hours", cost: "₹850" },
    { source: "Chennai", destination: "Thiruvananthapuram", transportation: "Flight", duration: "1.5 hours", cost: "₹3,000" },

    // Chennai to Bhopal
    { source: "Chennai", destination: "Bhopal", transportation: "Train", duration: "24 hours", cost: "₹2,200" },
    { source: "Chennai", destination: "Bhopal", transportation: "Flight", duration: "3 hours", cost: "₹4,500" },

    // Chennai to Mumbai
    { source: "Chennai", destination: "Mumbai", transportation: "Train", duration: "22 hours", cost: "₹2,000" },
    { source: "Chennai", destination: "Mumbai", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },

    // Chennai to Imphal
    { source: "Chennai", destination: "Imphal", transportation: "Flight", duration: "5 hours", cost: "₹8,000" },

    // Chennai to Shillong
    { source: "Chennai", destination: "Shillong", transportation: "Flight", duration: "5 hours", cost: "₹7,800" },

    // Chennai to Aizawl
    { source: "Chennai", destination: "Aizawl", transportation: "Flight", duration: "4.5 hours", cost: "₹7,500" },

    // Chennai to Kohima
    { source: "Chennai", destination: "Kohima", transportation: "Flight", duration: "5 hours", cost: "₹8,000" },

    // Chennai to Bhubaneswar
    { source: "Chennai", destination: "Bhubaneswar", transportation: "Train", duration: "20 hours", cost: "₹1,800" },
    { source: "Chennai", destination: "Bhubaneswar", transportation: "Flight", duration: "2.5 hours", cost: "₹3,500" },

    // Chennai to Jaipur
    { source: "Chennai", destination: "Jaipur", transportation: "Train", duration: "32 hours", cost: "₹2,800" },
    { source: "Chennai", destination: "Jaipur", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Chennai to Gangtok
    { source: "Chennai", destination: "Gangtok", transportation: "Flight", duration: "4.5 hours", cost: "₹7,000" },

    // Chennai to Hyderabad
    { source: "Chennai", destination: "Hyderabad", transportation: "Bus", duration: "10 hours", cost: "₹800" },
    { source: "Chennai", destination: "Hyderabad", transportation: "Train", duration: "9 hours", cost: "₹750" },
    { source: "Chennai", destination: "Hyderabad", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },

    // Chennai to Agartala
    { source: "Chennai", destination: "Agartala", transportation: "Flight", duration: "5.5 hours", cost: "₹8,500" },

    // Chennai to Lucknow
    { source: "Chennai", destination: "Lucknow", transportation: "Train", duration: "30 hours", cost: "₹2,500" },
    { source: "Chennai", destination: "Lucknow", transportation: "Flight", duration: "3.5 hours", cost: "₹5,000" },

    // Chennai to Dehradun
    { source: "Chennai", destination: "Dehradun", transportation: "Train", duration: "34 hours", cost: "₹3,000" },
    { source: "Chennai", destination: "Dehradun", transportation: "Flight", duration: "4 hours", cost: "₹6,200" },

    // Chennai to Kolkata
    { source: "Chennai", destination: "Kolkata", transportation: "Train", duration: "27 hours", cost: "₹2,200" },
    { source: "Chennai", destination: "Kolkata", transportation: "Flight", duration: "2.5 hours", cost: "₹4,000" },

    // Union Territory Capitals
    // Chennai to Port Blair
    { source: "Chennai", destination: "Port Blair", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },
    { source: "Chennai", destination: "Port Blair", transportation: "Ship", duration: "60 hours", cost: "₹2,000" },

    // Chennai to Chandigarh
    { source: "Chennai", destination: "Chandigarh", transportation: "Train", duration: "34 hours", cost: "₹3,000" },
    { source: "Chennai", destination: "Chandigarh", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Chennai to Daman
    { source: "Chennai", destination: "Daman", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Chennai to Delhi
    { source: "Chennai", destination: "Delhi", transportation: "Train", duration: "35 hours", cost: "₹3,000" },
    { source: "Chennai", destination: "Delhi", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Chennai to Srinagar (Jammu & Kashmir)
    { source: "Chennai", destination: "Srinagar", transportation: "Flight", duration: "6 hours", cost: "₹7,500" },
    { source: "Chennai", destination: "Jammu", transportation: "Train", duration: "40 hours", cost: "₹3,500" },
    { source: "Chennai", destination: "Jammu", transportation: "Flight", duration: "5.5 hours", cost: "₹6,800" },

    // Chennai to Kavaratti
    { source: "Chennai", destination: "Kavaratti", transportation: "Flight", duration: "6 hours", cost: "₹8,500" },

    // Chennai to Leh (Ladakh)
    { source: "Chennai", destination: "Leh", transportation: "Flight", duration: "6.5 hours", cost: "₹9,000" },

    // Chennai to Puducherry
    { source: "Chennai", destination: "Puducherry", transportation: "Bus", duration: "3.5 hours", cost: "₹400" },
    { source: "Chennai", destination: "Puducherry", transportation: "Train", duration: "4 hours", cost: "₹350" },

    // Hyderabad to Amaravati
    { source: "Hyderabad", destination: "Amaravati", transportation: "Bus", duration: "5 hours", cost: "₹500" },
    { source: "Hyderabad", destination: "Amaravati", transportation: "Train", duration: "4.5 hours", cost: "₹450" },
    { source: "Hyderabad", destination: "Amaravati", transportation: "Flight", duration: "1 hour", cost: "₹2,000" },

    // Hyderabad to Itanagar
    { source: "Hyderabad", destination: "Itanagar", transportation: "Flight", duration: "4.5 hours", cost: "₹7,000" },

    // Hyderabad to Dispur
    { source: "Hyderabad", destination: "Dispur", transportation: "Flight", duration: "3.5 hours", cost: "₹6,500" },

    // Hyderabad to Patna
    { source: "Hyderabad", destination: "Patna", transportation: "Train", duration: "20 hours", cost: "₹1,800" },
    { source: "Hyderabad", destination: "Patna", transportation: "Flight", duration: "2.5 hours", cost: "₹4,200" },

    // Hyderabad to Raipur
    { source: "Hyderabad", destination: "Raipur", transportation: "Bus", duration: "12 hours", cost: "₹1,000" },
    { source: "Hyderabad", destination: "Raipur", transportation: "Train", duration: "11 hours", cost: "₹950" },
    { source: "Hyderabad", destination: "Raipur", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },

    // Hyderabad to Panaji
    { source: "Hyderabad", destination: "Panaji", transportation: "Bus", duration: "14 hours", cost: "₹1,200" },
    { source: "Hyderabad", destination: "Panaji", transportation: "Train", duration: "13 hours", cost: "₹1,150" },
    { source: "Hyderabad", destination: "Panaji", transportation: "Flight", duration: "1.5 hours", cost: "₹3,000" },

    // Hyderabad to Gandhinagar
    { source: "Hyderabad", destination: "Gandhinagar", transportation: "Train", duration: "18 hours", cost: "₹2,000" },
    { source: "Hyderabad", destination: "Gandhinagar", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },

    // Hyderabad to Chandigarh
    { source: "Hyderabad", destination: "Chandigarh", transportation: "Train", duration: "28 hours", cost: "₹2,800" },
    { source: "Hyderabad", destination: "Chandigarh", transportation: "Flight", duration: "3 hours", cost: "₹5,500" },

    // Hyderabad to Shimla
    { source: "Hyderabad", destination: "Shimla", transportation: "Train", duration: "30 hours", cost: "₹3,000" },
    { source: "Hyderabad", destination: "Shimla", transportation: "Flight", duration: "3.5 hours", cost: "₹6,000" },

    // Hyderabad to Ranchi
    { source: "Hyderabad", destination: "Ranchi", transportation: "Train", duration: "22 hours", cost: "₹2,000" },
    { source: "Hyderabad", destination: "Ranchi", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Hyderabad to Bengaluru
    { source: "Hyderabad", destination: "Bengaluru", transportation: "Bus", duration: "9 hours", cost: "₹900" },
    { source: "Hyderabad", destination: "Bengaluru", transportation: "Train", duration: "8.5 hours", cost: "₹850" },
    { source: "Hyderabad", destination: "Bengaluru", transportation: "Flight", duration: "1 hour", cost: "₹2,500" },

    // Hyderabad to Thiruvananthapuram
    { source: "Hyderabad", destination: "Thiruvananthapuram", transportation: "Train", duration: "16 hours", cost: "₹1,800" },
    { source: "Hyderabad", destination: "Thiruvananthapuram", transportation: "Flight", duration: "2 hours", cost: "₹4,500" },

    // Hyderabad to Bhopal
    { source: "Hyderabad", destination: "Bhopal", transportation: "Train", duration: "14 hours", cost: "₹1,600" },
    { source: "Hyderabad", destination: "Bhopal", transportation: "Flight", duration: "1.5 hours", cost: "₹3,500" },

    // Hyderabad to Mumbai
    { source: "Hyderabad", destination: "Mumbai", transportation: "Bus", duration: "12 hours", cost: "₹1,100" },
    { source: "Hyderabad", destination: "Mumbai", transportation: "Train", duration: "11.5 hours", cost: "₹1,050" },
    { source: "Hyderabad", destination: "Mumbai", transportation: "Flight", duration: "1.5 hours", cost: "₹3,000" },

    // Hyderabad to Imphal
    { source: "Hyderabad", destination: "Imphal", transportation: "Flight", duration: "4.5 hours", cost: "₹7,500" },

    // Hyderabad to Shillong
    { source: "Hyderabad", destination: "Shillong", transportation: "Flight", duration: "4 hours", cost: "₹7,000" },

    // Hyderabad to Aizawl
    { source: "Hyderabad", destination: "Aizawl", transportation: "Flight", duration: "3.5 hours", cost: "₹6,500" },

    // Hyderabad to Kohima
    { source: "Hyderabad", destination: "Kohima", transportation: "Flight", duration: "4 hours", cost: "₹7,000" },

    // Hyderabad to Bhubaneswar
    { source: "Hyderabad", destination: "Bhubaneswar", transportation: "Train", duration: "16 hours", cost: "₹1,700" },
    { source: "Hyderabad", destination: "Bhubaneswar", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },

    // Hyderabad to Jaipur
    { source: "Hyderabad", destination: "Jaipur", transportation: "Train", duration: "22 hours", cost: "₹2,200" },
    { source: "Hyderabad", destination: "Jaipur", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Hyderabad to Gangtok
    { source: "Hyderabad", destination: "Gangtok", transportation: "Flight", duration: "4.5 hours", cost: "₹7,500" },

    // Hyderabad to Agartala
    { source: "Hyderabad", destination: "Agartala", transportation: "Flight", duration: "5 hours", cost: "₹8,000" },

    // Hyderabad to Lucknow
    { source: "Hyderabad", destination: "Lucknow", transportation: "Train", duration: "24 hours", cost: "₹2,000" },
    { source: "Hyderabad", destination: "Lucknow", transportation: "Flight", duration: "2.5 hours", cost: "₹4,200" },

    // Hyderabad to Dehradun
    { source: "Hyderabad", destination: "Dehradun", transportation: "Train", duration: "28 hours", cost: "₹2,500" },
    { source: "Hyderabad", destination: "Dehradun", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Hyderabad to Kolkata
    { source: "Hyderabad", destination: "Kolkata", transportation: "Train", duration: "26 hours", cost: "₹2,200" },
    { source: "Hyderabad", destination: "Kolkata", transportation: "Flight", duration: "2 hours", cost: "₹3,800" },

    // Union Territory Capitals
    // Hyderabad to Port Blair
    { source: "Hyderabad", destination: "Port Blair", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Hyderabad to Chandigarh
    { source: "Hyderabad", destination: "Chandigarh", transportation: "Train", duration: "28 hours", cost: "₹2,800" },
    { source: "Hyderabad", destination: "Chandigarh", transportation: "Flight", duration: "3.5 hours", cost: "₹5,800" },

    // Hyderabad to Daman
    { source: "Hyderabad", destination: "Daman", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Hyderabad to Delhi
    { source: "Hyderabad", destination: "Delhi", transportation: "Train", duration: "24 hours", cost: "₹2,500" },
    { source: "Hyderabad", destination: "Delhi", transportation: "Flight", duration: "2.5 hours", cost: "₹4,800" },

    // Hyderabad to Srinagar (Jammu & Kashmir)
    { source: "Hyderabad", destination: "Srinagar", transportation: "Flight", duration: "5.5 hours", cost: "₹7,200" },
    { source: "Hyderabad", destination: "Jammu", transportation: "Train", duration: "30 hours", cost: "₹3,200" },
    { source: "Hyderabad", destination: "Jammu", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Hyderabad to Kavaratti
    { source: "Hyderabad", destination: "Kavaratti", transportation: "Flight", duration: "6 hours", cost: "₹8,500" },

    // Hyderabad to Leh (Ladakh)
    { source: "Hyderabad", destination: "Leh", transportation: "Flight", duration: "6.5 hours", cost: "₹9,000" },

    // Hyderabad to Puducherry
    { source: "Hyderabad", destination: "Puducherry", transportation: "Bus", duration: "10 hours", cost: "₹900" },
    { source: "Hyderabad", destination: "Puducherry", transportation: "Train", duration: "9.5 hours", cost: "₹850" },

    // Agartala to Itanagar
    { source: "Agartala", destination: "Itanagar", transportation: "Bus", duration: "24 hours", cost: "₹1,500" },
    { source: "Agartala", destination: "Itanagar", transportation: "Train", duration: "22 hours", cost: "₹1,200" },
    { source: "Agartala", destination: "Itanagar", transportation: "Flight", duration: "3 hours", cost: "₹4,500" },

    // Agartala to Dispur (Guwahati)
    { source: "Agartala", destination: "Dispur", transportation: "Bus", duration: "18 hours", cost: "₹1,200" },
    { source: "Agartala", destination: "Dispur", transportation: "Train", duration: "16 hours", cost: "₹1,000" },
    { source: "Agartala", destination: "Dispur", transportation: "Flight", duration: "2.5 hours", cost: "₹4,000" },

    // Agartala to Patna
    { source: "Agartala", destination: "Patna", transportation: "Bus", duration: "30 hours", cost: "₹1,800" },
    { source: "Agartala", destination: "Patna", transportation: "Train", duration: "28 hours", cost: "₹1,500" },
    { source: "Agartala", destination: "Patna", transportation: "Flight", duration: "3.5 hours", cost: "₹5,000" },

    // Agartala to Raipur
    { source: "Agartala", destination: "Raipur", transportation: "Bus", duration: "36 hours", cost: "₹2,000" },
    { source: "Agartala", destination: "Raipur", transportation: "Train", duration: "34 hours", cost: "₹1,800" },
    { source: "Agartala", destination: "Raipur", transportation: "Flight", duration: "4 hours", cost: "₹5,500" },

    // Agartala to Panaji
    { source: "Agartala", destination: "Panaji", transportation: "Bus", duration: "48 hours", cost: "₹2,500" },
    { source: "Agartala", destination: "Panaji", transportation: "Train", duration: "46 hours", cost: "₹2,200" },
    { source: "Agartala", destination: "Panaji", transportation: "Flight", duration: "5 hours", cost: "₹6,000" },

    // Agartala to Gandhinagar
    { source: "Agartala", destination: "Gandhinagar", transportation: "Bus", duration: "42 hours", cost: "₹2,300" },
    { source: "Agartala", destination: "Gandhinagar", transportation: "Train", duration: "40 hours", cost: "₹2,000" },
    { source: "Agartala", destination: "Gandhinagar", transportation: "Flight", duration: "4.5 hours", cost: "₹5,800" },

    // Agartala to Chandigarh
    { source: "Agartala", destination: "Chandigarh", transportation: "Bus", duration: "40 hours", cost: "₹2,200" },
    { source: "Agartala", destination: "Chandigarh", transportation: "Train", duration: "38 hours", cost: "₹2,000" },
    { source: "Agartala", destination: "Chandigarh", transportation: "Flight", duration: "4 hours", cost: "₹5,500" },

    // Agartala to Shimla
    { source: "Agartala", destination: "Shimla", transportation: "Bus", duration: "42 hours", cost: "₹2,300" },
    { source: "Agartala", destination: "Shimla", transportation: "Train", duration: "40 hours", cost: "₹2,100" },
    { source: "Agartala", destination: "Shimla", transportation: "Flight", duration: "4.5 hours", cost: "₹5,800" },

    // Agartala to Ranchi
    { source: "Agartala", destination: "Ranchi", transportation: "Bus", duration: "32 hours", cost: "₹1,900" },
    { source: "Agartala", destination: "Ranchi", transportation: "Train", duration: "30 hours", cost: "₹1,700" },
    { source: "Agartala", destination: "Ranchi", transportation: "Flight", duration: "3.5 hours", cost: "₹5,200" },

    // Agartala to Bengaluru
    { source: "Agartala", destination: "Bengaluru", transportation: "Bus", duration: "50 hours", cost: "₹2,600" },
    { source: "Agartala", destination: "Bengaluru", transportation: "Train", duration: "48 hours", cost: "₹2,400" },
    { source: "Agartala", destination: "Bengaluru", transportation: "Flight", duration: "5.5 hours", cost: "₹6,500" },

    // Agartala to Thiruvananthapuram
    { source: "Agartala", destination: "Thiruvananthapuram", transportation: "Bus", duration: "55 hours", cost: "₹2,800" },
    { source: "Agartala", destination: "Thiruvananthapuram", transportation: "Train", duration: "53 hours", cost: "₹2,600" },
    { source: "Agartala", destination: "Thiruvananthapuram", transportation: "Flight", duration: "6 hours", cost: "₹7,000" },

    // Agartala to Bhopal
    { source: "Agartala", destination: "Bhopal", transportation: "Bus", duration: "38 hours", cost: "₹2,100" },
    { source: "Agartala", destination: "Bhopal", transportation: "Train", duration: "36 hours", cost: "₹1,900" },
    { source: "Agartala", destination: "Bhopal", transportation: "Flight", duration: "4 hours", cost: "₹5,500" },

    // Agartala to Mumbai
    { source: "Agartala", destination: "Mumbai", transportation: "Bus", duration: "52 hours", cost: "₹2,700" },
    { source: "Agartala", destination: "Mumbai", transportation: "Train", duration: "50 hours", cost: "₹2,500" },
    { source: "Agartala", destination: "Mumbai", transportation: "Flight", duration: "6 hours", cost: "₹6,500" },

    // Agartala to Imphal
    { source: "Agartala", destination: "Imphal", transportation: "Bus", duration: "14 hours", cost: "₹800" },
    { source: "Agartala", destination: "Imphal", transportation: "Train", duration: "12 hours", cost: "₹700" },
    { source: "Agartala", destination: "Imphal", transportation: "Flight", duration: "1.5 hours", cost: "₹3,000" },

    // Agartala to Shillong
    { source: "Agartala", destination: "Shillong", transportation: "Bus", duration: "16 hours", cost: "₹1,000" },
    { source: "Agartala", destination: "Shillong", transportation: "Train", duration: "14 hours", cost: "₹900" },
    { source: "Agartala", destination: "Shillong", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },

    // Agartala to Aizawl
    { source: "Agartala", destination: "Aizawl", transportation: "Bus", duration: "10 hours", cost: "₹600" },
    { source: "Agartala", destination: "Aizawl", transportation: "Train", duration: "9 hours", cost: "₹500" },
    { source: "Agartala", destination: "Aizawl", transportation: "Flight", duration: "1 hour", cost: "₹2,500" },

    // Agartala to Kohima
    { source: "Agartala", destination: "Kohima", transportation: "Bus", duration: "20 hours", cost: "₹1,300" },
    { source: "Agartala", destination: "Kohima", transportation: "Train", duration: "18 hours", cost: "₹1,100" },
    { source: "Agartala", destination: "Kohima", transportation: "Flight", duration: "2.5 hours", cost: "₹4,200" },

    // Agartala to Bhubaneswar
    { source: "Agartala", destination: "Bhubaneswar", transportation: "Bus", duration: "34 hours", cost: "₹2,000" },
    { source: "Agartala", destination: "Bhubaneswar", transportation: "Train", duration: "32 hours", cost: "₹1,800" },
    { source: "Agartala", destination: "Bhubaneswar", transportation: "Flight", duration: "3.5 hours", cost: "₹5,000" },

    // Agartala to Jaipur
    { source: "Agartala", destination: "Jaipur", transportation: "Bus", duration: "45 hours", cost: "₹2,500" },
    { source: "Agartala", destination: "Jaipur", transportation: "Train", duration: "43 hours", cost: "₹2,300" },
    { source: "Agartala", destination: "Jaipur", transportation: "Flight", duration: "5 hours", cost: "₹6,000" },

    // Agartala to Gangtok
    { source: "Agartala", destination: "Gangtok", transportation: "Bus", duration: "22 hours", cost: "₹1,500" },
    { source: "Agartala", destination: "Gangtok", transportation: "Train", duration: "20 hours", cost: "₹1,300" },
    { source: "Agartala", destination: "Gangtok", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Agartala to Chennai
    { source: "Agartala", destination: "Chennai", transportation: "Bus", duration: "50 hours", cost: "₹2,800" },
    { source: "Agartala", destination: "Chennai", transportation: "Train", duration: "48 hours", cost: "₹2,600" },
    { source: "Agartala", destination: "Chennai", transportation: "Flight", duration: "5.5 hours", cost: "₹6,500" },

    // Agartala to Hyderabad
    { source: "Agartala", destination: "Hyderabad", transportation: "Bus", duration: "48 hours", cost: "₹2,700" },
    { source: "Agartala", destination: "Hyderabad", transportation: "Train", duration: "46 hours", cost: "₹2,500" },
    { source: "Agartala", destination: "Hyderabad", transportation: "Flight", duration: "5 hours", cost: "₹6,300" },

    // Agartala to Lucknow
    { source: "Agartala", destination: "Lucknow", transportation: "Bus", duration: "38 hours", cost: "₹2,100" },
    { source: "Agartala", destination: "Lucknow", transportation: "Train", duration: "36 hours", cost: "₹1,900" },
    { source: "Agartala", destination: "Lucknow", transportation: "Flight", duration: "4 hours", cost: "₹5,500" },

    // Agartala to Dehradun
    { source: "Agartala", destination: "Dehradun", transportation: "Bus", duration: "42 hours", cost: "₹2,300" },
    { source: "Agartala", destination: "Dehradun", transportation: "Train", duration: "40 hours", cost: "₹2,100" },
    { source: "Agartala", destination: "Dehradun", transportation: "Flight", duration: "4.5 hours", cost: "₹5,800" },

    // Agartala to Kolkata
    { source: "Agartala", destination: "Kolkata", transportation: "Bus", duration: "20 hours", cost: "₹1,500" },
    { source: "Agartala", destination: "Kolkata", transportation: "Train", duration: "18 hours", cost: "₹1,200" },
    { source: "Agartala", destination: "Kolkata", transportation: "Flight", duration: "1.5 hours", cost: "₹4,000" },

    // Agartala to Port Blair
    { source: "Agartala", destination: "Port Blair", transportation: "Flight", duration: "5 hours", cost: "₹7,500" },
    
    // Agartala to Daman
    { source: "Agartala", destination: "Daman", transportation: "Bus", duration: "48 hours", cost: "₹2,500" },
    { source: "Agartala", destination: "Daman", transportation: "Train", duration: "46 hours", cost: "₹2,200" },
    { source: "Agartala", destination: "Daman", transportation: "Flight", duration: "6 hours", cost: "₹6,500" },

    // Agartala to Delhi
    { source: "Agartala", destination: "Delhi", transportation: "Bus", duration: "44 hours", cost: "₹2,400" },
    { source: "Agartala", destination: "Delhi", transportation: "Train", duration: "42 hours", cost: "₹2,200" },
    { source: "Agartala", destination: "Delhi", transportation: "Flight", duration: "4.5 hours", cost: "₹5,800" },

    // Agartala to Srinagar
    { source: "Agartala", destination: "Srinagar", transportation: "Bus", duration: "50 hours", cost: "₹2,800" },
    { source: "Agartala", destination: "Srinagar", transportation: "Train", duration: "48 hours", cost: "₹2,600" },
    { source: "Agartala", destination: "Srinagar", transportation: "Flight", duration: "5.5 hours", cost: "₹6,500" },

    // Agartala to Kavaratti
    { source: "Agartala", destination: "Kavaratti", transportation: "Flight + Ship", duration: "8 hours", cost: "₹8,000" },

    // Agartala to Leh
    { source: "Agartala", destination: "Leh", transportation: "Bus", duration: "55 hours", cost: "₹3,000" },
    { source: "Agartala", destination: "Leh", transportation: "Train", duration: "52 hours", cost: "₹2,800" },
    { source: "Agartala", destination: "Leh", transportation: "Flight", duration: "6 hours", cost: "₹7,500" },

    // Agartala to Puducherry
    { source: "Agartala", destination: "Puducherry", transportation: "Bus", duration: "56 hours", cost: "₹3,200" },
    { source: "Agartala", destination: "Puducherry", transportation: "Train", duration: "54 hours", cost: "₹3,000" },
    { source: "Agartala", destination: "Puducherry", transportation: "Flight", duration: "6 hours", cost: "₹7,800" },

    // Lucknow to Amaravati
    { source: "Lucknow", destination: "Amaravati", transportation: "Train", duration: "24 hours", cost: "₹2,500" },
    { source: "Lucknow", destination: "Amaravati", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Lucknow to Itanagar
    { source: "Lucknow", destination: "Itanagar", transportation: "Train", duration: "30 hours", cost: "₹3,000" },
    { source: "Lucknow", destination: "Itanagar", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Lucknow to Dispur
    { source: "Lucknow", destination: "Dispur", transportation: "Train", duration: "27 hours", cost: "₹2,800" },
    { source: "Lucknow", destination: "Dispur", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Lucknow to Patna
    { source: "Lucknow", destination: "Patna", transportation: "Train", duration: "8 hours", cost: "₹900" },
    { source: "Lucknow", destination: "Patna", transportation: "Bus", duration: "10 hours", cost: "₹1,000" },

    // Lucknow to Raipur
    { source: "Lucknow", destination: "Raipur", transportation: "Train", duration: "15 hours", cost: "₹1,500" },
    { source: "Lucknow", destination: "Raipur", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },

    // Lucknow to Panaji
    { source: "Lucknow", destination: "Panaji", transportation: "Train", duration: "30 hours", cost: "₹3,000" },
    { source: "Lucknow", destination: "Panaji", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Lucknow to Gandhinagar
    { source: "Lucknow", destination: "Gandhinagar", transportation: "Train", duration: "20 hours", cost: "₹2,000" },
    { source: "Lucknow", destination: "Gandhinagar", transportation: "Flight", duration: "2.5 hours", cost: "₹4,000" },

    // Lucknow to Chandigarh
    { source: "Lucknow", destination: "Chandigarh", transportation: "Train", duration: "12 hours", cost: "₹1,200" },
    { source: "Lucknow", destination: "Chandigarh", transportation: "Bus", duration: "14 hours", cost: "₹1,400" },
    { source: "Lucknow", destination: "Chandigarh", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },

    // Lucknow to Shimla
    { source: "Lucknow", destination: "Shimla", transportation: "Train", duration: "14 hours", cost: "₹1,400" },
    { source: "Lucknow", destination: "Shimla", transportation: "Bus", duration: "16 hours", cost: "₹1,600" },
    { source: "Lucknow", destination: "Shimla", transportation: "Flight", duration: "2 hours", cost: "₹3,000" },

    // Lucknow to Ranchi
    { source: "Lucknow", destination: "Ranchi", transportation: "Train", duration: "10 hours", cost: "₹1,000" },
    { source: "Lucknow", destination: "Ranchi", transportation: "Bus", duration: "12 hours", cost: "₹1,200" },
    { source: "Lucknow", destination: "Ranchi", transportation: "Flight", duration: "1.5 hours", cost: "₹2,000" },

    // Lucknow to Bengaluru
    { source: "Lucknow", destination: "Bengaluru", transportation: "Train", duration: "36 hours", cost: "₹3,600" },
    { source: "Lucknow", destination: "Bengaluru", transportation: "Flight", duration: "2.5 hours", cost: "₹5,500" },

    // Lucknow to Thiruvananthapuram
    { source: "Lucknow", destination: "Thiruvananthapuram", transportation: "Train", duration: "40 hours", cost: "₹4,000" },
    { source: "Lucknow", destination: "Thiruvananthapuram", transportation: "Flight", duration: "3 hours", cost: "₹6,000" },

    // Lucknow to Bhopal
    { source: "Lucknow", destination: "Bhopal", transportation: "Train", duration: "12 hours", cost: "₹1,200" },
    { source: "Lucknow", destination: "Bhopal", transportation: "Bus", duration: "14 hours", cost: "₹1,400" },
    { source: "Lucknow", destination: "Bhopal", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },

    // Lucknow to Mumbai
    { source: "Lucknow", destination: "Mumbai", transportation: "Train", duration: "24 hours", cost: "₹2,400" },
    { source: "Lucknow", destination: "Mumbai", transportation: "Flight", duration: "2 hours", cost: "₹4,500" },

    // Lucknow to Imphal
    { source: "Lucknow", destination: "Imphal", transportation: "Flight", duration: "4 hours", cost: "₹6,500" },

    // Lucknow to Shillong
    { source: "Lucknow", destination: "Shillong", transportation: "Flight", duration: "4.5 hours", cost: "₹6,800" },

    // Lucknow to Aizawl
    { source: "Lucknow", destination: "Aizawl", transportation: "Flight", duration: "4 hours", cost: "₹6,200" },

    // Lucknow to Kohima
    { source: "Lucknow", destination: "Kohima", transportation: "Flight", duration: "4.5 hours", cost: "₹6,700" },

    // Lucknow to Bhubaneswar
    { source: "Lucknow", destination: "Bhubaneswar", transportation: "Train", duration: "20 hours", cost: "₹2,000" },
    { source: "Lucknow", destination: "Bhubaneswar", transportation: "Flight", duration: "2.5 hours", cost: "₹4,000" },

    // Lucknow to Jaipur
    { source: "Lucknow", destination: "Jaipur", transportation: "Train", duration: "9 hours", cost: "₹1,000" },
    { source: "Lucknow", destination: "Jaipur", transportation: "Bus", duration: "11 hours", cost: "₹1,200" },
    { source: "Lucknow", destination: "Jaipur", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },

    // Lucknow to Gangtok (via NJP)
    { source: "Lucknow", destination: "Gangtok", transportation: "Train + Taxi", duration: "20 hours", cost: "₹2,500" },
    { source: "Lucknow", destination: "Gangtok", transportation: "Flight + Taxi", duration: "3 hours", cost: "₹5,500" },

    // Lucknow to Chennai
    { source: "Lucknow", destination: "Chennai", transportation: "Train", duration: "36 hours", cost: "₹3,600" },
    { source: "Lucknow", destination: "Chennai", transportation: "Flight", duration: "2.5 hours", cost: "₹5,500" },

    // Lucknow to Hyderabad
    { source: "Lucknow", destination: "Hyderabad", transportation: "Train", duration: "24 hours", cost: "₹2,400" },
    { source: "Lucknow", destination: "Hyderabad", transportation: "Flight", duration: "2 hours", cost: "₹4,500" },

    // Lucknow to Agartala
    { source: "Lucknow", destination: "Agartala", transportation: "Flight", duration: "3.5 hours", cost: "₹6,000" },

    // Lucknow to Dehradun
    { source: "Lucknow", destination: "Dehradun", transportation: "Train", duration: "12 hours", cost: "₹1,200" },
    { source: "Lucknow", destination: "Dehradun", transportation: "Bus", duration: "14 hours", cost: "₹1,400" },
    { source: "Lucknow", destination: "Dehradun", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },

    // Lucknow to Kolkata
    { source: "Lucknow", destination: "Kolkata", transportation: "Train", duration: "18 hours", cost: "₹2,000" },
    { source: "Lucknow", destination: "Kolkata", transportation: "Flight", duration: "1.5 hours", cost: "₹4,000" },

    // Lucknow to Port Blair
    { source: "Lucknow", destination: "Port Blair", transportation: "Flight", duration: "5 hours", cost: "₹7,000" },

    // Lucknow to Chandigarh (already included)

    // Lucknow to Daman
    { source: "Lucknow", destination: "Daman", transportation: "Train + Taxi", duration: "22 hours", cost: "₹3,000" },
    { source: "Lucknow", destination: "Daman", transportation: "Flight + Taxi", duration: "3.5 hours", cost: "₹6,000" },

    // Lucknow to Delhi
    { source: "Lucknow", destination: "Delhi", transportation: "Train", duration: "6 hours", cost: "₹900" },
    { source: "Lucknow", destination: "Delhi", transportation: "Bus", duration: "7 hours", cost: "₹1,000" },
    { source: "Lucknow", destination: "Delhi", transportation: "Flight", duration: "1 hour", cost: "₹2,500" },

    // Lucknow to Srinagar (Summer) / Jammu (Winter)
    { source: "Lucknow", destination: "Srinagar", transportation: "Flight", duration: "2 hours", cost: "₹4,500" },
    { source: "Lucknow", destination: "Jammu", transportation: "Train", duration: "14 hours", cost: "₹1,800" },

    // Lucknow to Kavaratti (via Kochi)
    { source: "Lucknow", destination: "Kavaratti", transportation: "Flight + Ship", duration: "10 hours", cost: "₹9,000" },

    // Lucknow to Leh (Ladakh)
    { source: "Lucknow", destination: "Leh", transportation: "Flight", duration: "3 hours", cost: "₹6,500" },

    // Lucknow to Puducherry
    { source: "Lucknow", destination: "Puducherry", transportation: "Flight + Taxi", duration: "4.5 hours", cost: "₹6,500" },
    { source: "Lucknow", destination: "Puducherry", transportation: "Train + Taxi", duration: "38 hours", cost: "₹3,800" },

    // Dehradun to Amaravati
    { source: "Dehradun", destination: "Amaravati", transportation: "Flight", duration: "8 hours", cost: "₹7,500" },
    { source: "Dehradun", destination: "Amaravati", transportation: "Train", duration: "24 hours", cost: "₹2,500" },

    // Dehradun to Itanagar
    { source: "Dehradun", destination: "Itanagar", transportation: "Flight", duration: "10 hours", cost: "₹9,000" },
    { source: "Dehradun", destination: "Itanagar", transportation: "Train", duration: "36 hours", cost: "₹3,500" },

    // Dehradun to Dispur
    { source: "Dehradun", destination: "Dispur", transportation: "Flight", duration: "9 hours", cost: "₹8,500" },
    { source: "Dehradun", destination: "Dispur", transportation: "Train", duration: "34 hours", cost: "₹3,200" },

    // Dehradun to Patna
    { source: "Dehradun", destination: "Patna", transportation: "Flight", duration: "5 hours", cost: "₹6,000" },
    { source: "Dehradun", destination: "Patna", transportation: "Train", duration: "18 hours", cost: "₹2,000" },

    // Dehradun to Raipur
    { source: "Dehradun", destination: "Raipur", transportation: "Flight", duration: "7 hours", cost: "₹7,000" },
    { source: "Dehradun", destination: "Raipur", transportation: "Train", duration: "22 hours", cost: "₹2,800" },

    // Dehradun to Panaji
    { source: "Dehradun", destination: "Panaji", transportation: "Flight", duration: "8 hours", cost: "₹8,000" },
    { source: "Dehradun", destination: "Panaji", transportation: "Train", duration: "28 hours", cost: "₹3,500" },

    // Dehradun to Gandhinagar
    { source: "Dehradun", destination: "Gandhinagar", transportation: "Flight", duration: "6 hours", cost: "₹6,500" },
    { source: "Dehradun", destination: "Gandhinagar", transportation: "Train", duration: "20 hours", cost: "₹2,500" },

    // Dehradun to Chandigarh
    { source: "Dehradun", destination: "Chandigarh", transportation: "Bus", duration: "5 hours", cost: "₹500" },
    { source: "Dehradun", destination: "Chandigarh", transportation: "Train", duration: "4 hours", cost: "₹400" },

    // Dehradun to Shimla
    { source: "Dehradun", destination: "Shimla", transportation: "Bus", duration: "6 hours", cost: "₹600" },
    { source: "Dehradun", destination: "Shimla", transportation: "Train", duration: "7 hours", cost: "₹700" },

    // Dehradun to Ranchi
    { source: "Dehradun", destination: "Ranchi", transportation: "Flight", duration: "6 hours", cost: "₹6,500" },
    { source: "Dehradun", destination: "Ranchi", transportation: "Train", duration: "20 hours", cost: "₹2,500" },

    // Dehradun to Bengaluru
    { source: "Dehradun", destination: "Bengaluru", transportation: "Flight", duration: "7 hours", cost: "₹7,500" },
    { source: "Dehradun", destination: "Bengaluru", transportation: "Train", duration: "36 hours", cost: "₹4,000" },

    // Dehradun to Thiruvananthapuram
    { source: "Dehradun", destination: "Thiruvananthapuram", transportation: "Flight", duration: "9 hours", cost: "₹9,000" },
    { source: "Dehradun", destination: "Thiruvananthapuram", transportation: "Train", duration: "42 hours", cost: "₹4,500" },

    // Dehradun to Bhopal
    { source: "Dehradun", destination: "Bhopal", transportation: "Flight", duration: "5 hours", cost: "₹6,000" },
    { source: "Dehradun", destination: "Bhopal", transportation: "Train", duration: "16 hours", cost: "₹2,200" },

    // Dehradun to Mumbai
    { source: "Dehradun", destination: "Mumbai", transportation: "Flight", duration: "6 hours", cost: "₹6,500" },
    { source: "Dehradun", destination: "Mumbai", transportation: "Train", duration: "24 hours", cost: "₹3,000" },

    // Dehradun to Imphal
    { source: "Dehradun", destination: "Imphal", transportation: "Flight", duration: "10 hours", cost: "₹9,500" },
    { source: "Dehradun", destination: "Imphal", transportation: "Train", duration: "40 hours", cost: "₹4,000" },

    // Dehradun to Shillong
    { source: "Dehradun", destination: "Shillong", transportation: "Flight", duration: "9 hours", cost: "₹9,000" },
    { source: "Dehradun", destination: "Shillong", transportation: "Train", duration: "38 hours", cost: "₹3,800" },

    // Dehradun to Aizawl
    { source: "Dehradun", destination: "Aizawl", transportation: "Flight", duration: "9 hours", cost: "₹9,000" },
    { source: "Dehradun", destination: "Aizawl", transportation: "Train", duration: "40 hours", cost: "₹4,000" },

    // Dehradun to Kohima
    { source: "Dehradun", destination: "Kohima", transportation: "Flight", duration: "10 hours", cost: "₹9,500" },
    { source: "Dehradun", destination: "Kohima", transportation: "Train", duration: "42 hours", cost: "₹4,200" },

    // Dehradun to Bhubaneswar
    { source: "Dehradun", destination: "Bhubaneswar", transportation: "Flight", duration: "7 hours", cost: "₹7,500" },
    { source: "Dehradun", destination: "Bhubaneswar", transportation: "Train", duration: "28 hours", cost: "₹3,200" },

    // Dehradun to Chandigarh
    { source: "Dehradun", destination: "Chandigarh", transportation: "Bus", duration: "5 hours", cost: "₹500" },
    { source: "Dehradun", destination: "Chandigarh", transportation: "Train", duration: "4 hours", cost: "₹400" },

    // Dehradun to Jaipur
    { source: "Dehradun", destination: "Jaipur", transportation: "Bus", duration: "12 hours", cost: "₹1,200" },
    { source: "Dehradun", destination: "Jaipur", transportation: "Train", duration: "10 hours", cost: "₹1,000" },
    { source: "Dehradun", destination: "Jaipur", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Dehradun to Gangtok
    { source: "Dehradun", destination: "Gangtok", transportation: "Flight", duration: "9 hours", cost: "₹9,000" },
    { source: "Dehradun", destination: "Gangtok", transportation: "Train", duration: "36 hours", cost: "₹3,800" },

    // Dehradun to Chennai
    { source: "Dehradun", destination: "Chennai", transportation: "Flight", duration: "6 hours", cost: "₹6,500" },
    { source: "Dehradun", destination: "Chennai", transportation: "Train", duration: "36 hours", cost: "₹4,200" },

    // Dehradun to Hyderabad
    { source: "Dehradun", destination: "Hyderabad", transportation: "Flight", duration: "5.5 hours", cost: "₹6,200" },
    { source: "Dehradun", destination: "Hyderabad", transportation: "Train", duration: "30 hours", cost: "₹3,700" },

    // Dehradun to Agartala
    { source: "Dehradun", destination: "Agartala", transportation: "Flight", duration: "8 hours", cost: "₹8,500" },
    { source: "Dehradun", destination: "Agartala", transportation: "Train", duration: "40 hours", cost: "₹4,200" },

    // Dehradun to Lucknow
    { source: "Dehradun", destination: "Lucknow", transportation: "Bus", duration: "10 hours", cost: "₹1,000" },
    { source: "Dehradun", destination: "Lucknow", transportation: "Train", duration: "9 hours", cost: "₹900" },

    // Dehradun to Kolkata
    { source: "Dehradun", destination: "Kolkata", transportation: "Flight", duration: "6.5 hours", cost: "₹7,000" },
    { source: "Dehradun", destination: "Kolkata", transportation: "Train", duration: "32 hours", cost: "₹3,500" },

    // Dehradun to Port Blair
    { source: "Dehradun", destination: "Port Blair", transportation: "Flight", duration: "7 hours", cost: "₹8,000" },

    // Dehradun to Daman
    { source: "Dehradun", destination: "Daman", transportation: "Flight", duration: "6 hours", cost: "₹7,200" },
    { source: "Dehradun", destination: "Daman", transportation: "Train", duration: "35 hours", cost: "₹3,800" },

    // Dehradun to Delhi
    { source: "Dehradun", destination: "Delhi", transportation: "Bus", duration: "6 hours", cost: "₹700" },
    { source: "Dehradun", destination: "Delhi", transportation: "Train", duration: "5 hours", cost: "₹600" },

    // Dehradun to Srinagar
    { source: "Dehradun", destination: "Srinagar", transportation: "Flight", duration: "5 hours", cost: "₹6,000" },
    { source: "Dehradun", destination: "Srinagar", transportation: "Train", duration: "24 hours", cost: "₹2,800" },

    // Dehradun to Kavaratti
    { source: "Dehradun", destination: "Kavaratti", transportation: "Flight + Ship", duration: "10 hours", cost: "₹9,500" },

    // Dehradun to Leh
    { source: "Dehradun", destination: "Leh", transportation: "Flight", duration: "6 hours", cost: "₹7,000" },
    { source: "Dehradun", destination: "Leh", transportation: "Train", duration: "40 hours", cost: "₹4,500" },

    // Dehradun to Puducherry
    { source: "Dehradun", destination: "Puducherry", transportation: "Flight", duration: "7 hours", cost: "₹7,800" },
    { source: "Dehradun", destination: "Puducherry", transportation: "Train", duration: "38 hours", cost: "₹4,200" },

    // Kolkata to Amaravati
    { source: "Kolkata", destination: "Amaravati", transportation: "Flight", duration: "6h 45m", cost: "₹5,500 - ₹16,000" },
    { source: "Kolkata", destination: "Amaravati", transportation: "Train", duration: "19h 39m", cost: "₹950 - ₹16,000" },

    // Kolkata to Itanagar
    { source: "Kolkata", destination: "Itanagar", transportation: "Flight", duration: "2 hours", cost: "₹3,996" },
    { source: "Kolkata", destination: "Itanagar", transportation: "Flight + Train via North Lakhimpur", duration: "5 hours", cost: "₹3,611" },

    // Kolkata to Dispur
    { source: "Kolkata", destination: "Dispur", transportation: "Flight", duration: "1.5 hours", cost: "₹3,500" },
    { source: "Kolkata", destination: "Dispur", transportation: "Train", duration: "18 hours", cost: "₹800" },

    // Kolkata to Patna
    { source: "Kolkata", destination: "Patna", transportation: "Flight", duration: "1 hour", cost: "₹2,500" },
    { source: "Kolkata", destination: "Patna", transportation: "Train", duration: "9 hours", cost: "₹500" },
    { source: "Kolkata", destination: "Patna", transportation: "Bus", duration: "10 hours", cost: "₹600" },

    // Kolkata to Raipur
    { source: "Kolkata", destination: "Raipur", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },
    { source: "Kolkata", destination: "Raipur", transportation: "Train", duration: "15 hours", cost: "₹1,200" },
    { source: "Kolkata", destination: "Raipur", transportation: "Bus", duration: "16 hours", cost: "₹1,000" },

    // Kolkata to Panaji
    { source: "Kolkata", destination: "Panaji", transportation: "Flight", duration: "3 hours", cost: "₹5,500" },
    { source: "Kolkata", destination: "Panaji", transportation: "Train", duration: "30 hours", cost: "₹2,000" },
    { source: "Kolkata", destination: "Panaji", transportation: "Bus", duration: "35 hours", cost: "₹2,500" },

    // Kolkata to Gandhinagar
    { source: "Kolkata", destination: "Gandhinagar", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },
    { source: "Kolkata", destination: "Gandhinagar", transportation: "Train", duration: "28 hours", cost: "₹1,800" },

    // Kolkata to Chandigarh
    { source: "Kolkata", destination: "Chandigarh", transportation: "Flight", duration: "2.5 hours", cost: "₹4,800" },
    { source: "Kolkata", destination: "Chandigarh", transportation: "Train", duration: "25 hours", cost: "₹2,000" },

    // Kolkata to Shimla
    { source: "Kolkata", destination: "Shimla", transportation: "Flight + Taxi", duration: "4 hours", cost: "₹5,500" },
    { source: "Kolkata", destination: "Shimla", transportation: "Train", duration: "30 hours", cost: "₹2,200" },

    // Kolkata to Ranchi
    { source: "Kolkata", destination: "Ranchi", transportation: "Flight", duration: "1 hour", cost: "₹2,000" },
    { source: "Kolkata", destination: "Ranchi", transportation: "Train", duration: "7 hours", cost: "₹600" },
    { source: "Kolkata", destination: "Ranchi", transportation: "Bus", duration: "8 hours", cost: "₹700" },

    // Kolkata to Bengaluru
    { source: "Kolkata", destination: "Bengaluru", transportation: "Flight", duration: "2.5 hours", cost: "₹4,000" },
    { source: "Kolkata", destination: "Bengaluru", transportation: "Train", duration: "29 hours", cost: "₹1,500" },

    // Kolkata to Thiruvananthapuram
    { source: "Kolkata", destination: "Thiruvananthapuram", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },
    { source: "Kolkata", destination: "Thiruvananthapuram", transportation: "Train", duration: "36 hours", cost: "₹2,000" },

    // Kolkata to Bhopal
    { source: "Kolkata", destination: "Bhopal", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },
    { source: "Kolkata", destination: "Bhopal", transportation: "Train", duration: "20 hours", cost: "₹1,200" },

    // Kolkata to Mumbai
    { source: "Kolkata", destination: "Mumbai", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },
    { source: "Kolkata", destination: "Mumbai", transportation: "Train", duration: "30 hours", cost: "₹1,800" },

    // Kolkata to Imphal
    { source: "Kolkata", destination: "Imphal", transportation: "Flight", duration: "1.5 hours", cost: "₹3,500" },
    { source: "Kolkata", destination: "Imphal", transportation: "Bus", duration: "20 hours", cost: "₹1,500" },

    // Kolkata to Shillong
    { source: "Kolkata", destination: "Shillong", transportation: "Flight + Taxi", duration: "3 hours", cost: "₹4,000" },
    { source: "Kolkata", destination: "Shillong", transportation: "Bus", duration: "12 hours", cost: "₹800" },

    // Kolkata to Aizawl
    // Kolkata to Aizawl
    { source: "Kolkata", destination: "Aizawl", transportation: "Flight", duration: "2 hours", cost: "₹4,500" },
    { source: "Kolkata", destination: "Aizawl", transportation: "Bus", duration: "18 hours", cost: "₹1,200" },

    // Kolkata to Kohima
    { source: "Kolkata", destination: "Kohima", transportation: "Flight + Taxi", duration: "3.5 hours", cost: "₹4,800" },
    { source: "Kolkata", destination: "Kohima", transportation: "Train + Bus", duration: "24 hours", cost: "₹1,500" },

    // Kolkata to Bhubaneswar
    { source: "Kolkata", destination: "Bhubaneswar", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },
    { source: "Kolkata", destination: "Bhubaneswar", transportation: "Train", duration: "6 hours", cost: "₹700" },
    { source: "Kolkata", destination: "Bhubaneswar", transportation: "Bus", duration: "7 hours", cost: "₹800" },

    // Kolkata to Jaipur
    { source: "Kolkata", destination: "Jaipur", transportation: "Flight", duration: "2.5 hours", cost: "₹4,000" },
    { source: "Kolkata", destination: "Jaipur", transportation: "Train", duration: "24 hours", cost: "₹1,800" },

    // Kolkata to Gangtok
    { source: "Kolkata", destination: "Gangtok", transportation: "Flight + Taxi", duration: "4 hours", cost: "₹4,500" },
    { source: "Kolkata", destination: "Gangtok", transportation: "Bus", duration: "12 hours", cost: "₹1,000" },

    // Kolkata to Chennai
    { source: "Kolkata", destination: "Chennai", transportation: "Flight", duration: "2.5 hours", cost: "₹3,800" },
    { source: "Kolkata", destination: "Chennai", transportation: "Train", duration: "28 hours", cost: "₹1,600" },

    // Kolkata to Hyderabad
    { source: "Kolkata", destination: "Hyderabad", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },
    { source: "Kolkata", destination: "Hyderabad", transportation: "Train", duration: "26 hours", cost: "₹1,500" },

    // Kolkata to Agartala
    { source: "Kolkata", destination: "Agartala", transportation: "Flight", duration: "1.5 hours", cost: "₹3,000" },
    { source: "Kolkata", destination: "Agartala", transportation: "Train", duration: "22 hours", cost: "₹1,300" },

    // Kolkata to Lucknow
    { source: "Kolkata", destination: "Lucknow", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },
    { source: "Kolkata", destination: "Lucknow", transportation: "Train", duration: "15 hours", cost: "₹1,000" },

    // Kolkata to Dehradun
    { source: "Kolkata", destination: "Dehradun", transportation: "Flight", duration: "2.5 hours", cost: "₹4,200" },
    { source: "Kolkata", destination: "Dehradun", transportation: "Train", duration: "26 hours", cost: "₹1,800" },

    // Kolkata to Port Blair
    { source: "Kolkata", destination: "Port Blair", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },
    { source: "Kolkata", destination: "Port Blair", transportation: "Ship", duration: "3-4 days", cost: "₹2,000 - ₹8,000" },

    // Kolkata to Daman
    { source: "Kolkata", destination: "Daman", transportation: "Flight + Taxi", duration: "4.5 hours", cost: "₹6,000" },
    { source: "Kolkata", destination: "Daman", transportation: "Train + Bus", duration: "36 hours", cost: "₹2,500" },

    // Kolkata to Delhi
    { source: "Kolkata", destination: "Delhi", transportation: "Flight", duration: "2.5 hours", cost: "₹4,000" },
    { source: "Kolkata", destination: "Delhi", transportation: "Train", duration: "18 hours", cost: "₹1,200" },
    { source: "Kolkata", destination: "Delhi", transportation: "Bus", duration: "24 hours", cost: "₹1,500" },

    // Kolkata to Srinagar (Summer) / Jammu (Winter)
    { source: "Kolkata", destination: "Srinagar", transportation: "Flight", duration: "3.5 hours", cost: "₹6,500" },
    { source: "Kolkata", destination: "Jammu", transportation: "Train", duration: "30 hours", cost: "₹2,200" },

    // Kolkata to Kavaratti (Lakshadweep)
    { source: "Kolkata", destination: "Kavaratti", transportation: "Flight + Ship", duration: "8-10 hours", cost: "₹8,000 - ₹12,000" },

    // Kolkata to Leh (Ladakh)
    { source: "Kolkata", destination: "Leh", transportation: "Flight", duration: "4 hours", cost: "₹7,000" },
    { source: "Kolkata", destination: "Leh", transportation: "Train + Bus", duration: "3 days", cost: "₹3,500" },

    // Kolkata to Puducherry
    { source: "Kolkata", destination: "Puducherry", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },
    { source: "Kolkata", destination: "Puducherry", transportation: "Train", duration: "36 hours", cost: "₹2,500" },

    // Port Blair to Amaravati
    { source: "Port Blair", destination: "Amaravati", transportation: "Flight via Chennai", duration: "4.5 hours", cost: "₹7,000" },

    // Port Blair to Itanagar
    { source: "Port Blair", destination: "Itanagar", transportation: "Flight via Kolkata and Guwahati", duration: "8 hours", cost: "₹10,000" },

    // Port Blair to Dispur
    { source: "Port Blair", destination: "Dispur", transportation: "Flight via Kolkata", duration: "5.5 hours", cost: "₹8,500" },

    // Port Blair to Patna
    { source: "Port Blair", destination: "Patna", transportation: "Flight via Kolkata", duration: "5 hours", cost: "₹8,000" },

    // Port Blair to Raipur
    { source: "Port Blair", destination: "Raipur", transportation: "Flight via Chennai and Hyderabad", duration: "6.5 hours", cost: "₹9,000" },

    // Port Blair to Panaji
    { source: "Port Blair", destination: "Panaji", transportation: "Flight via Bengaluru", duration: "6 hours", cost: "₹8,500" },

    // Port Blair to Gandhinagar
    { source: "Port Blair", destination: "Gandhinagar", transportation: "Flight via Mumbai", duration: "6.5 hours", cost: "₹9,000" },

    // Port Blair to Chandigarh
    { source: "Port Blair", destination: "Chandigarh", transportation: "Flight via Delhi", duration: "6 hours", cost: "₹8,500" },

    // Port Blair to Shimla
    { source: "Port Blair", destination: "Shimla", transportation: "Flight via Delhi and Chandigarh", duration: "7 hours", cost: "₹9,500" },

    // Port Blair to Ranchi
    { source: "Port Blair", destination: "Ranchi", transportation: "Flight via Kolkata", duration: "5 hours", cost: "₹8,000" },

    // Port Blair to Bengaluru
    { source: "Port Blair", destination: "Bengaluru", transportation: "Direct Flight", duration: "2.5 hours", cost: "₹5,500" },

    // Port Blair to Thiruvananthapuram
    { source: "Port Blair", destination: "Thiruvananthapuram", transportation: "Flight via Chennai", duration: "4 hours", cost: "₹7,000" },

    // Port Blair to Bhopal
    { source: "Port Blair", destination: "Bhopal", transportation: "Flight via Mumbai", duration: "6 hours", cost: "₹8,500" },

    // Port Blair to Mumbai
    { source: "Port Blair", destination: "Mumbai", transportation: "Direct Flight", duration: "2.5 hours", cost: "₹5,500" },

    // Port Blair to Imphal
    { source: "Port Blair", destination: "Imphal", transportation: "Flight via Kolkata and Guwahati", duration: "7 hours", cost: "₹9,000" },

    // Port Blair to Shillong
    { source: "Port Blair", destination: "Shillong", transportation: "Flight via Kolkata and Guwahati", duration: "7 hours", cost: "₹9,000" },

    // Port Blair to Aizawl
    { source: "Port Blair", destination: "Aizawl", transportation: "Flight via Kolkata", duration: "6 hours", cost: "₹8,500" },

    // Port Blair to Kohima
    { source: "Port Blair", destination: "Kohima", transportation: "Flight via Kolkata and Dimapur", duration: "7 hours", cost: "₹9,000" },

    // Port Blair to Bhubaneswar
    { source: "Port Blair", destination: "Bhubaneswar", transportation: "Flight via Kolkata", duration: "5 hours", cost: "₹8,000" },

    // Port Blair to Jaipur
    { source: "Port Blair", destination: "Jaipur", transportation: "Flight via Delhi", duration: "6 hours", cost: "₹8,500" },

    // Port Blair to Gangtok
    { source: "Port Blair", destination: "Gangtok", transportation: "Flight via Kolkata and Bagdogra", duration: "6.5 hours", cost: "₹9,000" },

    // Port Blair to Chennai
    { source: "Port Blair", destination: "Chennai", transportation: "Direct Flight", duration: "2 hours", cost: "₹5,000" },

    // Port Blair to Hyderabad
    { source: "Port Blair", destination: "Hyderabad", transportation: "Flight via Chennai", duration: "4 hours", cost: "₹7,000" },

    // Port Blair to Agartala
    { source: "Port Blair", destination: "Agartala", transportation: "Flight via Kolkata", duration: "5.5 hours", cost: "₹8,500" },

    // Port Blair to Lucknow
    { source: "Port Blair", destination: "Lucknow", transportation: "Flight via Delhi", duration: "6 hours", cost: "₹8,500" },

    // Port Blair to Dehradun
    { source: "Port Blair", destination: "Dehradun", transportation: "Flight via Delhi", duration: "6.5 hours", cost: "₹9,000" },

    // Port Blair to Kolkata
    { source: "Port Blair", destination: "Kolkata", transportation: "Direct Flight", duration: "2.5 hours", cost: "₹5,500" },

    // Port Blair to Daman
    { source: "Port Blair", destination: "Daman", transportation: "Flight via Mumbai", duration: "6 hours", cost: "₹8,500" },

    // Port Blair to Delhi
    { source: "Port Blair", destination: "Delhi", transportation: "Direct Flight", duration: "3 hours", cost: "₹6,000" },

    // Port Blair to Srinagar
    { source: "Port Blair", destination: "Srinagar", transportation: "Flight via Delhi", duration: "7 hours", cost: "₹9,500" },

    // Port Blair to Kavaratti
    { source: "Port Blair", destination: "Kavaratti", transportation: "Flight via Kochi and Agatti, followed by boat", duration: "8 hours", cost: "₹10,000" },

    // Port Blair to Puducherry
    { source: "Port Blair", destination: "Puducherry", transportation: "Flight via Chennai, then bus/train", duration: "5.5 hours", cost: "₹7,500" },

    // Daman to Itanagar
    { source: "Daman", destination: "Itanagar", transportation: "Flight", duration: "6 hours", cost: "₹8,500" },

    // Daman to Dispur (Guwahati)
    { source: "Daman", destination: "Dispur", transportation: "Flight", duration: "5.5 hours", cost: "₹7,500" },

    // Daman to Patna
    { source: "Daman", destination: "Patna", transportation: "Train", duration: "24 hours", cost: "₹2,000" },
    { source: "Daman", destination: "Patna", transportation: "Flight", duration: "3.5 hours", cost: "₹5,000" },

    // Daman to Raipur
    { source: "Daman", destination: "Raipur", transportation: "Train", duration: "18 hours", cost: "₹1,800" },
    { source: "Daman", destination: "Raipur", transportation: "Flight", duration: "2.5 hours", cost: "₹4,000" },

    // Daman to Panaji
    { source: "Daman", destination: "Panaji", transportation: "Bus", duration: "14 hours", cost: "₹1,200" },
    { source: "Daman", destination: "Panaji", transportation: "Train", duration: "12 hours", cost: "₹1,000" },

    // Daman to Gandhinagar
    { source: "Daman", destination: "Gandhinagar", transportation: "Bus", duration: "6 hours", cost: "₹600" },
    { source: "Daman", destination: "Gandhinagar", transportation: "Train", duration: "5 hours", cost: "₹500" },

    // Daman to Chandigarh
    { source: "Daman", destination: "Chandigarh", transportation: "Train", duration: "20 hours", cost: "₹2,200" },
    { source: "Daman", destination: "Chandigarh", transportation: "Flight", duration: "3 hours", cost: "₹5,500" },

    // Daman to Shimla
    { source: "Daman", destination: "Shimla", transportation: "Train", duration: "22 hours", cost: "₹2,500" },
    { source: "Daman", destination: "Shimla", transportation: "Flight", duration: "3.5 hours", cost: "₹6,000" },

    // Daman to Ranchi
    { source: "Daman", destination: "Ranchi", transportation: "Train", duration: "20 hours", cost: "₹2,000" },
    { source: "Daman", destination: "Ranchi", transportation: "Flight", duration: "3 hours", cost: "₹4,500" },

    // Daman to Bengaluru
    { source: "Daman", destination: "Bengaluru", transportation: "Train", duration: "24 hours", cost: "₹2,500" },
    { source: "Daman", destination: "Bengaluru", transportation: "Flight", duration: "2.5 hours", cost: "₹5,000" },

    // Daman to Thiruvananthapuram
    { source: "Daman", destination: "Thiruvananthapuram", transportation: "Train", duration: "30 hours", cost: "₹3,000" },
    { source: "Daman", destination: "Thiruvananthapuram", transportation: "Flight", duration: "3.5 hours", cost: "₹6,500" },

    // Daman to Bhopal
    { source: "Daman", destination: "Bhopal", transportation: "Train", duration: "12 hours", cost: "₹1,500" },
    { source: "Daman", destination: "Bhopal", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },

    // Daman to Mumbai
    { source: "Daman", destination: "Mumbai", transportation: "Bus", duration: "4 hours", cost: "₹500" },
    { source: "Daman", destination: "Mumbai", transportation: "Train", duration: "3.5 hours", cost: "₹400" },

    // Daman to Imphal
    { source: "Daman", destination: "Imphal", transportation: "Flight", duration: "6 hours", cost: "₹9,000" },

    // Daman to Shillong
    { source: "Daman", destination: "Shillong", transportation: "Flight", duration: "5.5 hours", cost: "₹8,500" },

    // Daman to Aizawl
    { source: "Daman", destination: "Aizawl", transportation: "Flight", duration: "5 hours", cost: "₹8,000" },

    // Daman to Kohima
    { source: "Daman", destination: "Kohima", transportation: "Flight", duration: "5.5 hours", cost: "₹8,500" },

    // Daman to Bhubaneswar
    { source: "Daman", destination: "Bhubaneswar", transportation: "Train", duration: "26 hours", cost: "₹2,800" },
    { source: "Daman", destination: "Bhubaneswar", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Daman to Jaipur
    { source: "Daman", destination: "Jaipur", transportation: "Train", duration: "16 hours", cost: "₹2,000" },
    { source: "Daman", destination: "Jaipur", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Daman to Gangtok
    { source: "Daman", destination: "Gangtok", transportation: "Flight", duration: "5 hours", cost: "₹8,000" },

    // Daman to Chennai
    { source: "Daman", destination: "Chennai", transportation: "Train", duration: "28 hours", cost: "₹3,000" },
    { source: "Daman", destination: "Chennai", transportation: "Flight", duration: "3 hours", cost: "₹5,500" },

    // Daman to Hyderabad
    { source: "Daman", destination: "Hyderabad", transportation: "Train", duration: "18 hours", cost: "₹2,000" },
    { source: "Daman", destination: "Hyderabad", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },

    // Daman to Agartala
    { source: "Daman", destination: "Agartala", transportation: "Flight", duration: "6.5 hours", cost: "₹9,500" },

    // Daman to Lucknow
    { source: "Daman", destination: "Lucknow", transportation: "Train", duration: "20 hours", cost: "₹2,200" },
    { source: "Daman", destination: "Lucknow", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Daman to Dehradun
    { source: "Daman", destination: "Dehradun", transportation: "Train", duration: "22 hours", cost: "₹2,400" },
    { source: "Daman", destination: "Dehradun", transportation: "Flight", duration: "3 hours", cost: "₹5,200" },

    // Daman to Kolkata
    { source: "Daman", destination: "Kolkata", transportation: "Train", duration: "30 hours", cost: "₹3,200" },
    { source: "Daman", destination: "Kolkata", transportation: "Flight", duration: "3.5 hours", cost: "₹6,000" },

    // Daman to Port Blair
    { source: "Daman", destination: "Port Blair", transportation: "Flight", duration: "7 hours", cost: "₹10,000" },

    // Daman to Delhi
    { source: "Daman", destination: "Delhi", transportation: "Train", duration: "18 hours", cost: "₹2,500" },
    { source: "Daman", destination: "Delhi", transportation: "Flight", duration: "2.5 hours", cost: "₹4,800" },

    // Daman to Srinagar (J&K - Summer Capital)
    { source: "Daman", destination: "Srinagar", transportation: "Flight", duration: "4.5 hours", cost: "₹7,500" },

    // Daman to Jammu (J&K - Winter Capital)
    { source: "Daman", destination: "Jammu", transportation: "Train", duration: "26 hours", cost: "₹3,000" },
    { source: "Daman", destination: "Jammu", transportation: "Flight", duration: "3.5 hours", cost: "₹6,500" },

    // Daman to Kavaratti (Lakshadweep)
    { source: "Daman", destination: "Kavaratti", transportation: "Flight + Ship", duration: "10 hours", cost: "₹12,000" },

    // Daman to Leh (Ladakh)
    { source: "Daman", destination: "Leh", transportation: "Flight", duration: "4.5 hours", cost: "₹8,000" },

    // Daman to Puducherry
    { source: "Daman", destination: "Puducherry", transportation: "Train", duration: "30 hours", cost: "₹3,500" },
    { source: "Daman", destination: "Puducherry", transportation: "Flight", duration: "3.5 hours", cost: "₹6,500" },

    // Delhi to Itanagar
    { source: "Delhi", destination: "Itanagar", transportation: "Flight", duration: "3 hours", cost: "₹5,500" },
    { source: "Delhi", destination: "Itanagar", transportation: "Train", duration: "38 hours", cost: "₹2,000" },
    { source: "Delhi", destination: "Itanagar", transportation: "Bus", duration: "45 hours", cost: "₹1,800" },

    // Delhi to Dispur (Guwahati)
    { source: "Delhi", destination: "Dispur", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },
    { source: "Delhi", destination: "Dispur", transportation: "Train", duration: "28 hours", cost: "₹1,800" },
    { source: "Delhi", destination: "Dispur", transportation: "Bus", duration: "36 hours", cost: "₹1,600" },

    // Delhi to Patna
    { source: "Delhi", destination: "Patna", transportation: "Flight", duration: "1.5 hours", cost: "₹3,500" },
    { source: "Delhi", destination: "Patna", transportation: "Train", duration: "14 hours", cost: "₹1,200" },
    { source: "Delhi", destination: "Patna", transportation: "Bus", duration: "18 hours", cost: "₹1,000" },

    // Delhi to Raipur
    { source: "Delhi", destination: "Raipur", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },
    { source: "Delhi", destination: "Raipur", transportation: "Train", duration: "20 hours", cost: "₹1,500" },
    { source: "Delhi", destination: "Raipur", transportation: "Bus", duration: "24 hours", cost: "₹1,200" },

    // Delhi to Panaji
    { source: "Delhi", destination: "Panaji", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },
    { source: "Delhi", destination: "Panaji", transportation: "Train", duration: "30 hours", cost: "₹2,000" },
    { source: "Delhi", destination: "Panaji", transportation: "Bus", duration: "36 hours", cost: "₹1,800" },

    // Delhi to Gandhinagar (Ahmedabad)
    { source: "Delhi", destination: "Gandhinagar", transportation: "Flight", duration: "1.5 hours", cost: "₹3,000" },
    { source: "Delhi", destination: "Gandhinagar", transportation: "Train", duration: "12 hours", cost: "₹1,000" },
    { source: "Delhi", destination: "Gandhinagar", transportation: "Bus", duration: "15 hours", cost: "₹900" },

    // Delhi to Chandigarh
    { source: "Delhi", destination: "Chandigarh", transportation: "Flight", duration: "1 hour", cost: "₹2,500" },
    { source: "Delhi", destination: "Chandigarh", transportation: "Train", duration: "3.5 hours", cost: "₹500" },
    { source: "Delhi", destination: "Chandigarh", transportation: "Bus", duration: "5 hours", cost: "₹400" },

    // Delhi to Shimla
    { source: "Delhi", destination: "Shimla", transportation: "Flight", duration: "1.5 hours", cost: "₹3,000" },
    { source: "Delhi", destination: "Shimla", transportation: "Train", duration: "10 hours", cost: "₹800" },
    { source: "Delhi", destination: "Shimla", transportation: "Bus", duration: "12 hours", cost: "₹700" },

    // Delhi to Ranchi
    { source: "Delhi", destination: "Ranchi", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },
    { source: "Delhi", destination: "Ranchi", transportation: "Train", duration: "18 hours", cost: "₹1,400" },
    { source: "Delhi", destination: "Ranchi", transportation: "Bus", duration: "22 hours", cost: "₹1,200" },

    // Delhi to Bengaluru
    { source: "Delhi", destination: "Bengaluru", transportation: "Flight", duration: "2.5 hours", cost: "₹5,000" },
    { source: "Delhi", destination: "Bengaluru", transportation: "Train", duration: "36 hours", cost: "₹2,500" },
    { source: "Delhi", destination: "Bengaluru", transportation: "Bus", duration: "42 hours", cost: "₹2,200" },

    // Delhi to Thiruvananthapuram
    { source: "Delhi", destination: "Thiruvananthapuram", transportation: "Flight", duration: "3 hours", cost: "₹5,500" },
    { source: "Delhi", destination: "Thiruvananthapuram", transportation: "Train", duration: "48 hours", cost: "₹3,000" },
    { source: "Delhi", destination: "Thiruvananthapuram", transportation: "Bus", duration: "54 hours", cost: "₹2,800" },

    // Delhi to Bhopal
    { source: "Delhi", destination: "Bhopal", transportation: "Flight", duration: "1.5 hours", cost: "₹3,500" },
    { source: "Delhi", destination: "Bhopal", transportation: "Train", duration: "8 hours", cost: "₹1,000" },
    { source: "Delhi", destination: "Bhopal", transportation: "Bus", duration: "10 hours", cost: "₹900" },

    // Delhi to Mumbai
    { source: "Delhi", destination: "Mumbai", transportation: "Flight", duration: "2 hours", cost: "₹4,500" },
    { source: "Delhi", destination: "Mumbai", transportation: "Train", duration: "16 hours", cost: "₹2,000" },
    { source: "Delhi", destination: "Mumbai", transportation: "Bus", duration: "20 hours", cost: "₹1,800" },

    // Delhi to Imphal
    { source: "Delhi", destination: "Imphal", transportation: "Flight", duration: "3 hours", cost: "₹6,000" },
    { source: "Delhi", destination: "Imphal", transportation: "Train", duration: "40 hours", cost: "₹2,200" },
    { source: "Delhi", destination: "Imphal", transportation: "Bus", duration: "50 hours", cost: "₹2,000" },

    // Delhi to Shillong
    { source: "Delhi", destination: "Shillong", transportation: "Flight", duration: "3 hours", cost: "₹5,500" },
    { source: "Delhi", destination: "Shillong", transportation: "Train", duration: "36 hours", cost: "₹2,000" },
    { source: "Delhi", destination: "Shillong", transportation: "Bus", duration: "45 hours", cost: "₹1,800" },

    // Delhi to Aizawl
    { source: "Delhi", destination: "Aizawl", transportation: "Flight", duration: "3 hours", cost: "₹6,000" },
    { source: "Delhi", destination: "Aizawl", transportation: "Train", duration: "40 hours", cost: "₹2,500" },
    { source: "Delhi", destination: "Aizawl", transportation: "Bus", duration: "50 hours", cost: "₹2,200" },

    // Delhi to Kohima
    { source: "Delhi", destination: "Kohima", transportation: "Flight", duration: "3.5 hours", cost: "₹6,500" },
    { source: "Delhi", destination: "Kohima", transportation: "Train", duration: "42 hours", cost: "₹2,800" },
    { source: "Delhi", destination: "Kohima", transportation: "Bus", duration: "55 hours", cost: "₹2,500" },

    // Delhi to Bhubaneswar
    { source: "Delhi", destination: "Bhubaneswar", transportation: "Flight", duration: "2 hours", cost: "₹4,500" },
    { source: "Delhi", destination: "Bhubaneswar", transportation: "Train", duration: "22 hours", cost: "₹1,800" },
    { source: "Delhi", destination: "Bhubaneswar", transportation: "Bus", duration: "28 hours", cost: "₹1,500" },

    // Delhi to Jaipur
    { source: "Delhi", destination: "Jaipur", transportation: "Flight", duration: "1 hour", cost: "₹2,500" },
    { source: "Delhi", destination: "Jaipur", transportation: "Train", duration: "5 hours", cost: "₹600" },
    { source: "Delhi", destination: "Jaipur", transportation: "Bus", duration: "6 hours", cost: "₹500" },

    // Delhi to Gangtok
    { source: "Delhi", destination: "Gangtok", transportation: "Flight", duration: "3 hours", cost: "₹5,500" },
    { source: "Delhi", destination: "Gangtok", transportation: "Train", duration: "30 hours", cost: "₹2,000" },
    { source: "Delhi", destination: "Gangtok", transportation: "Bus", duration: "38 hours", cost: "₹1,800" },

    // Delhi to Chennai
    { source: "Delhi", destination: "Chennai", transportation: "Flight", duration: "2.5 hours", cost: "₹5,000" },
    { source: "Delhi", destination: "Chennai", transportation: "Train", duration: "36 hours", cost: "₹2,500" },
    { source: "Delhi", destination: "Chennai", transportation: "Bus", duration: "42 hours", cost: "₹2,200" },

    // Delhi to Hyderabad
    { source: "Delhi", destination: "Hyderabad", transportation: "Flight", duration: "2 hours", cost: "₹4,500" },
    { source: "Delhi", destination: "Hyderabad", transportation: "Train", duration: "24 hours", cost: "₹2,000" },
    { source: "Delhi", destination: "Hyderabad", transportation: "Bus", duration: "28 hours", cost: "₹1,800" },

    // Delhi to Agartala
    { source: "Delhi", destination: "Agartala", transportation: "Flight", duration: "3 hours", cost: "₹5,500" },
    { source: "Delhi", destination: "Agartala", transportation: "Train", duration: "38 hours", cost: "₹2,200" },
    { source: "Delhi", destination: "Agartala", transportation: "Bus", duration: "45 hours", cost: "₹2,000" },

    // Delhi to Lucknow
    { source: "Delhi", destination: "Lucknow", transportation: "Flight", duration: "1 hour", cost: "₹2,500" },
    { source: "Delhi", destination: "Lucknow", transportation: "Train", duration: "6 hours", cost: "₹700" },
    { source: "Delhi", destination: "Lucknow", transportation: "Bus", duration: "8 hours", cost: "₹600" },

    // Delhi to Dehradun
    { source: "Delhi", destination: "Dehradun", transportation: "Flight", duration: "1 hour", cost: "₹2,500" },
    { source: "Delhi", destination: "Dehradun", transportation: "Train", duration: "6 hours", cost: "₹700" },
    { source: "Delhi", destination: "Dehradun", transportation: "Bus", duration: "7 hours", cost: "₹600" },

    // Delhi to Kolkata
    { source: "Delhi", destination: "Kolkata", transportation: "Flight", duration: "2 hours", cost: "₹4,500" },
    { source: "Delhi", destination: "Kolkata", transportation: "Train", duration: "20 hours", cost: "₹2,000" },
    { source: "Delhi", destination: "Kolkata", transportation: "Bus", duration: "26 hours", cost: "₹1,800" },

    // Delhi to Port Blair
    { source: "Delhi", destination: "Port Blair", transportation: "Flight", duration: "4 hours", cost: "₹6,000" },

    // Delhi to Chandigarh
    { source: "Delhi", destination: "Chandigarh", transportation: "Flight", duration: "1 hour", cost: "₹2,500" },
    { source: "Delhi", destination: "Chandigarh", transportation: "Train", duration: "3.5 hours", cost: "₹500" },
    { source: "Delhi", destination: "Chandigarh", transportation: "Bus", duration: "5 hours", cost: "₹400" },

    // Delhi to Daman
    { source: "Delhi", destination: "Daman", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },
    { source: "Delhi", destination: "Daman", transportation: "Train", duration: "18 hours", cost: "₹1,800" },
    { source: "Delhi", destination: "Daman", transportation: "Bus", duration: "20 hours", cost: "₹1,500" },

    // Delhi to Srinagar
    { source: "Delhi", destination: "Srinagar", transportation: "Flight", duration: "1.5 hours", cost: "₹3,500" },
    { source: "Delhi", destination: "Srinagar", transportation: "Train", duration: "12 hours", cost: "₹1,500" },
    { source: "Delhi", destination: "Srinagar", transportation: "Bus", duration: "14 hours", cost: "₹1,200" },

    // Delhi to Kavaratti
    { source: "Delhi", destination: "Kavaratti", transportation: "Flight", duration: "6 hours", cost: "₹8,000" },

    // Delhi to Leh
    { source: "Delhi", destination: "Leh", transportation: "Flight", duration: "1.5 hours", cost: "₹3,500" },
    { source: "Delhi", destination: "Leh", transportation: "Bus", duration: "30 hours", cost: "₹2,500" },

    // Delhi to Puducherry
    { source: "Delhi", destination: "Puducherry", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },
    { source: "Delhi", destination: "Puducherry", transportation: "Train", duration: "36 hours", cost: "₹2,800" },
    { source: "Delhi", destination: "Puducherry", transportation: "Bus", duration: "40 hours", cost: "₹2,500" },

    // Srinagar/Jammu to Amaravati
    { source: "Srinagar", destination: "Amaravati", transportation: "Flight", duration: "4.5 hours", cost: "₹7,000" },
    { source: "Jammu", destination: "Amaravati", transportation: "Train", duration: "36 hours", cost: "₹2,500" },
    { source: "Jammu", destination: "Amaravati", transportation: "Bus", duration: "40 hours", cost: "₹2,000" },

    // Srinagar/Jammu to Itanagar
    { source: "Srinagar", destination: "Itanagar", transportation: "Flight", duration: "5 hours", cost: "₹8,000" },
    { source: "Jammu", destination: "Itanagar", transportation: "Train", duration: "38 hours", cost: "₹2,800" },
    { source: "Jammu", destination: "Itanagar", transportation: "Bus", duration: "42 hours", cost: "₹2,200" },

    // Srinagar/Jammu to Dispur
    { source: "Srinagar", destination: "Dispur", transportation: "Flight", duration: "4.5 hours", cost: "₹7,500" },
    { source: "Jammu", destination: "Dispur", transportation: "Train", duration: "35 hours", cost: "₹2,600" },
    { source: "Jammu", destination: "Dispur", transportation: "Bus", duration: "39 hours", cost: "₹2,100" },

    // Srinagar/Jammu to Patna
    { source: "Srinagar", destination: "Patna", transportation: "Flight", duration: "3.5 hours", cost: "₹6,500" },
    { source: "Jammu", destination: "Patna", transportation: "Train", duration: "30 hours", cost: "₹2,300" },
    { source: "Jammu", destination: "Patna", transportation: "Bus", duration: "34 hours", cost: "₹1,900" },

    // Srinagar/Jammu to Raipur
    { source: "Srinagar", destination: "Raipur", transportation: "Flight", duration: "4 hours", cost: "₹7,000" },
    { source: "Jammu", destination: "Raipur", transportation: "Train", duration: "32 hours", cost: "₹2,400" },
    { source: "Jammu", destination: "Raipur", transportation: "Bus", duration: "36 hours", cost: "₹2,000" },

    // Srinagar/Jammu to Panaji
    { source: "Srinagar", destination: "Panaji", transportation: "Flight", duration: "5 hours", cost: "₹8,500" },
    { source: "Jammu", destination: "Panaji", transportation: "Train", duration: "40 hours", cost: "₹2,900" },
    { source: "Jammu", destination: "Panaji", transportation: "Bus", duration: "44 hours", cost: "₹2,300" },

    // Srinagar/Jammu to Gandhinagar
    { source: "Srinagar", destination: "Gandhinagar", transportation: "Flight", duration: "4 hours", cost: "₹7,200" },
    { source: "Jammu", destination: "Gandhinagar", transportation: "Train", duration: "34 hours", cost: "₹2,500" },
    { source: "Jammu", destination: "Gandhinagar", transportation: "Bus", duration: "38 hours", cost: "₹2,100" },

    // Srinagar/Jammu to Chandigarh
    { source: "Srinagar", destination: "Chandigarh", transportation: "Flight", duration: "1.5 hours", cost: "₹4,500" },
    { source: "Jammu", destination: "Chandigarh", transportation: "Train", duration: "8 hours", cost: "₹1,200" },
    { source: "Jammu", destination: "Chandigarh", transportation: "Bus", duration: "9 hours", cost: "₹1,000" },

    // Srinagar/Jammu to Shimla
    { source: "Srinagar", destination: "Shimla", transportation: "Flight", duration: "2 hours", cost: "₹5,000" },
    { source: "Jammu", destination: "Shimla", transportation: "Train", duration: "10 hours", cost: "₹1,300" },
    { source: "Jammu", destination: "Shimla", transportation: "Bus", duration: "11 hours", cost: "₹1,100" },

    // Srinagar/Jammu to Ranchi
    { source: "Srinagar", destination: "Ranchi", transportation: "Flight", duration: "4 hours", cost: "₹7,000" },
    { source: "Jammu", destination: "Ranchi", transportation: "Train", duration: "30 hours", cost: "₹2,300" },
    { source: "Jammu", destination: "Ranchi", transportation: "Bus", duration: "34 hours", cost: "₹1,900" },

    // Srinagar/Jammu to Bengaluru
    { source: "Srinagar", destination: "Bengaluru", transportation: "Flight", duration: "4.5 hours", cost: "₹7,500" },
    { source: "Jammu", destination: "Bengaluru", transportation: "Train", duration: "36 hours", cost: "₹2,500" },
    { source: "Jammu", destination: "Bengaluru", transportation: "Bus", duration: "40 hours", cost: "₹2,000" },

    // Srinagar/Jammu to Thiruvananthapuram
    { source: "Srinagar", destination: "Thiruvananthapuram", transportation: "Flight", duration: "5 hours", cost: "₹8,500" },
    { source: "Jammu", destination: "Thiruvananthapuram", transportation: "Train", duration: "42 hours", cost: "₹3,000" },
    { source: "Jammu", destination: "Thiruvananthapuram", transportation: "Bus", duration: "46 hours", cost: "₹2,500" },

    // Srinagar/Jammu to Bhopal
    { source: "Srinagar", destination: "Bhopal", transportation: "Flight", duration: "4 hours", cost: "₹6,800" },
    { source: "Jammu", destination: "Bhopal", transportation: "Train", duration: "28 hours", cost: "₹2,200" },
    { source: "Jammu", destination: "Bhopal", transportation: "Bus", duration: "32 hours", cost: "₹1,800" },

    // Srinagar/Jammu to Mumbai
    { source: "Srinagar", destination: "Mumbai", transportation: "Flight", duration: "3.5 hours", cost: "₹7,500" },
    { source: "Jammu", destination: "Mumbai", transportation: "Train", duration: "32 hours", cost: "₹2,500" },
    { source: "Jammu", destination: "Mumbai", transportation: "Bus", duration: "36 hours", cost: "₹2,000" },

    // Srinagar/Jammu to Imphal
    { source: "Srinagar", destination: "Imphal", transportation: "Flight", duration: "5 hours", cost: "₹9,000" },
    { source: "Jammu", destination: "Imphal", transportation: "Train", duration: "42 hours", cost: "₹3,200" },
    { source: "Jammu", destination: "Imphal", transportation: "Bus", duration: "46 hours", cost: "₹2,800" },

    // Srinagar/Jammu to Shillong
    { source: "Srinagar", destination: "Shillong", transportation: "Flight", duration: "5 hours", cost: "₹8,500" },
    { source: "Jammu", destination: "Shillong", transportation: "Train", duration: "40 hours", cost: "₹3,000" },
    { source: "Jammu", destination: "Shillong", transportation: "Bus", duration: "44 hours", cost: "₹2,600" },

    // Srinagar/Jammu to Aizawl
    { source: "Srinagar", destination: "Aizawl", transportation: "Flight", duration: "5.5 hours", cost: "₹9,200" },
    { source: "Jammu", destination: "Aizawl", transportation: "Train", duration: "44 hours", cost: "₹3,400" },
    { source: "Jammu", destination: "Aizawl", transportation: "Bus", duration: "48 hours", cost: "₹3,000" },

    // Srinagar/Jammu to Kohima
    { source: "Srinagar", destination: "Kohima", transportation: "Flight", duration: "5.5 hours", cost: "₹9,000" },
    { source: "Jammu", destination: "Kohima", transportation: "Train", duration: "45 hours", cost: "₹3,500" },
    { source: "Jammu", destination: "Kohima", transportation: "Bus", duration: "50 hours", cost: "₹3,100" },

    // Srinagar/Jammu to Bhubaneswar
    { source: "Srinagar", destination: "Bhubaneswar", transportation: "Flight", duration: "4.5 hours", cost: "₹7,800" },
    { source: "Jammu", destination: "Bhubaneswar", transportation: "Train", duration: "36 hours", cost: "₹2,800" },
    { source: "Jammu", destination: "Bhubaneswar", transportation: "Bus", duration: "40 hours", cost: "₹2,300" },

    // Srinagar/Jammu to Jaipur
    { source: "Srinagar", destination: "Jaipur", transportation: "Flight", duration: "3.5 hours", cost: "₹6,500" },
    { source: "Jammu", destination: "Jaipur", transportation: "Train", duration: "20 hours", cost: "₹2,000" },
    { source: "Jammu", destination: "Jaipur", transportation: "Bus", duration: "22 hours", cost: "₹1,700" },

    // Srinagar/Jammu to Gangtok
    { source: "Srinagar", destination: "Gangtok", transportation: "Flight", duration: "5 hours", cost: "₹8,700" },
    { source: "Jammu", destination: "Gangtok", transportation: "Train", duration: "38 hours", cost: "₹3,000" },
    { source: "Jammu", destination: "Gangtok", transportation: "Bus", duration: "42 hours", cost: "₹2,700" },

    // Srinagar/Jammu to Chennai
    { source: "Srinagar", destination: "Chennai", transportation: "Flight", duration: "5 hours", cost: "₹8,000" },
    { source: "Jammu", destination: "Chennai", transportation: "Train", duration: "42 hours", cost: "₹3,200" },
    { source: "Jammu", destination: "Chennai", transportation: "Bus", duration: "46 hours", cost: "₹2,900" },

    // Srinagar/Jammu to Hyderabad
    { source: "Srinagar", destination: "Hyderabad", transportation: "Flight", duration: "4.5 hours", cost: "₹7,700" },
    { source: "Jammu", destination: "Hyderabad", transportation: "Train", duration: "40 hours", cost: "₹3,100" },
    { source: "Jammu", destination: "Hyderabad", transportation: "Bus", duration: "44 hours", cost: "₹2,800" },

    // Srinagar/Jammu to Kolkata
    // Srinagar/Jammu to Agartala
    { source: "Srinagar", destination: "Agartala", transportation: "Flight", duration: "5 hours", cost: "₹8,500" },
    { source: "Jammu", destination: "Agartala", transportation: "Train", duration: "42 hours", cost: "₹3,000" },
    { source: "Jammu", destination: "Agartala", transportation: "Bus", duration: "46 hours", cost: "₹2,500" },

    // Srinagar/Jammu to Lucknow
    { source: "Srinagar", destination: "Lucknow", transportation: "Flight", duration: "3 hours", cost: "₹6,000" },
    { source: "Jammu", destination: "Lucknow", transportation: "Train", duration: "24 hours", cost: "₹2,000" },
    { source: "Jammu", destination: "Lucknow", transportation: "Bus", duration: "28 hours", cost: "₹1,800" },

    // Srinagar/Jammu to Dehradun
    { source: "Srinagar", destination: "Dehradun", transportation: "Flight", duration: "2.5 hours", cost: "₹5,500" },
    { source: "Jammu", destination: "Dehradun", transportation: "Train", duration: "10 hours", cost: "₹1,500" },
    { source: "Jammu", destination: "Dehradun", transportation: "Bus", duration: "12 hours", cost: "₹1,200" },

    // Srinagar/Jammu to Kolkata
    { source: "Srinagar", destination: "Kolkata", transportation: "Flight", duration: "4.5 hours", cost: "₹7,800" },
    { source: "Jammu", destination: "Kolkata", transportation: "Train", duration: "36 hours", cost: "₹2,700" },
    { source: "Jammu", destination: "Kolkata", transportation: "Bus", duration: "40 hours", cost: "₹2,300" },

    // Srinagar/Jammu to Port Blair
    { source: "Srinagar", destination: "Port Blair", transportation: "Flight", duration: "6 hours", cost: "₹10,000" },

    // Srinagar/Jammu to Daman
    { source: "Srinagar", destination: "Daman", transportation: "Flight", duration: "4.5 hours", cost: "₹8,000" },
    { source: "Jammu", destination: "Daman", transportation: "Train", duration: "38 hours", cost: "₹2,800" },

    // Srinagar/Jammu to Delhi
    { source: "Srinagar", destination: "Delhi", transportation: "Flight", duration: "1.5 hours", cost: "₹4,500" },
    { source: "Jammu", destination: "Delhi", transportation: "Train", duration: "10 hours", cost: "₹1,300" },
    { source: "Jammu", destination: "Delhi", transportation: "Bus", duration: "11 hours", cost: "₹1,100" },

    // Srinagar/Jammu to Kavaratti
    { source: "Srinagar", destination: "Kavaratti", transportation: "Flight & Ship", duration: "8 hours", cost: "₹12,000" },

    // Srinagar/Jammu to Leh (Ladakh)
    { source: "Srinagar", destination: "Leh", transportation: "Flight", duration: "1 hour", cost: "₹3,500" },
    { source: "Jammu", destination: "Leh", transportation: "Bus", duration: "14 hours", cost: "₹1,800" },

    // Srinagar/Jammu to Puducherry
    { source: "Srinagar", destination: "Puducherry", transportation: "Flight", duration: "5 hours", cost: "₹8,500" },
    { source: "Jammu", destination: "Puducherry", transportation: "Train", duration: "44 hours", cost: "₹3,200" },
    { source: "Jammu", destination: "Puducherry", transportation: "Bus", duration: "48 hours", cost: "₹2,800" },

    // Kavaratti to Itanagar
    { source: "Kavaratti", destination: "Itanagar", transportation: ["Ferry", "Flight", "Train", "Bus"], duration: "36 hours", cost: "₹15,000" },

    // Kavaratti to Dispur
    { source: "Kavaratti", destination: "Dispur", transportation: ["Ferry", "Flight", "Train", "Bus"], duration: "34 hours", cost: "₹14,500" },

    // Kavaratti to Patna
    { source: "Kavaratti", destination: "Patna", transportation: ["Ferry", "Flight", "Train"], duration: "30 hours", cost: "₹13,000" },

    // Kavaratti to Raipur
    { source: "Kavaratti", destination: "Raipur", transportation: ["Ferry", "Flight", "Train"], duration: "28 hours", cost: "₹12,500" },

    // Kavaratti to Panaji
    { source: "Kavaratti", destination: "Panaji", transportation: ["Ferry", "Flight", "Bus"], duration: "26 hours", cost: "₹12,000" },

    // Kavaratti to Gandhinagar
    { source: "Kavaratti", destination: "Gandhinagar", transportation: ["Ferry", "Flight", "Train"], duration: "32 hours", cost: "₹13,500" },

    // Kavaratti to Chandigarh
    { source: "Kavaratti", destination: "Chandigarh", transportation: ["Ferry", "Flight", "Train"], duration: "35 hours", cost: "₹14,000" },

    // Kavaratti to Shimla
    { source: "Kavaratti", destination: "Shimla", transportation: ["Ferry", "Flight", "Train", "Bus"], duration: "36 hours", cost: "₹14,500" },

    // Kavaratti to Ranchi
    { source: "Kavaratti", destination: "Ranchi", transportation: ["Ferry", "Flight", "Train"], duration: "31 hours", cost: "₹13,200" },

    // Kavaratti to Bengaluru
    { source: "Kavaratti", destination: "Bengaluru", transportation: ["Ferry", "Flight"], duration: "24 hours", cost: "₹11,000" },

    // Kavaratti to Thiruvananthapuram
    { source: "Kavaratti", destination: "Thiruvananthapuram", transportation: ["Ferry", "Flight", "Bus"], duration: "22 hours", cost: "₹10,500" },

    // Kavaratti to Bhopal
    { source: "Kavaratti", destination: "Bhopal", transportation: ["Ferry", "Flight", "Train"], duration: "29 hours", cost: "₹12,800" },

    // Kavaratti to Mumbai
    { source: "Kavaratti", destination: "Mumbai", transportation: ["Ferry", "Flight"], duration: "27 hours", cost: "₹12,200" },

    // Kavaratti to Imphal
    { source: "Kavaratti", destination: "Imphal", transportation: ["Ferry", "Flight", "Train", "Bus"], duration: "37 hours", cost: "₹15,200" },

    // Kavaratti to Shillong
    { source: "Kavaratti", destination: "Shillong", transportation: ["Ferry", "Flight", "Train", "Bus"], duration: "36 hours", cost: "₹14,800" },

    // Kavaratti to Aizawl
    { source: "Kavaratti", destination: "Aizawl", transportation: ["Ferry", "Flight", "Train", "Bus"], duration: "35 hours", cost: "₹14,500" },

    // Kavaratti to Kohima
    { source: "Kavaratti", destination: "Kohima", transportation: ["Ferry", "Flight", "Train", "Bus"], duration: "36 hours", cost: "₹14,700" },

    // Kavaratti to Bhubaneswar
    { source: "Kavaratti", destination: "Bhubaneswar", transportation: ["Ferry", "Flight", "Train"], duration: "32 hours", cost: "₹13,500" },

    // Kavaratti to Jaipur
    { source: "Kavaratti", destination: "Jaipur", transportation: ["Ferry", "Flight", "Train"], duration: "33 hours", cost: "₹13,800" },

    // Kavaratti to Gangtok
    { source: "Kavaratti", destination: "Gangtok", transportation: ["Ferry", "Flight", "Train", "Bus"], duration: "36 hours", cost: "₹14,500" },

    // Kavaratti to Chennai
    { source: "Kavaratti", destination: "Chennai", transportation: ["Ferry", "Flight"], duration: "25 hours", cost: "₹11,500" },

    // Kavaratti to Hyderabad
    { source: "Kavaratti", destination: "Hyderabad", transportation: ["Ferry", "Flight", "Train"], duration: "26 hours", cost: "₹12,000" },

    // Kavaratti to Agartala
    { source: "Kavaratti", destination: "Agartala", transportation: ["Ferry", "Flight", "Train", "Bus"], duration: "38 hours", cost: "₹15,500" },

    // Kavaratti to Lucknow
    { source: "Kavaratti", destination: "Lucknow", transportation: ["Ferry", "Flight", "Train"], duration: "30 hours", cost: "₹13,200" },

    // Kavaratti to Dehradun
    { source: "Kavaratti", destination: "Dehradun", transportation: ["Ferry", "Flight", "Train"], duration: "34 hours", cost: "₹14,000" },

    // Kavaratti to Kolkata
    { source: "Kavaratti", destination: "Kolkata", transportation: ["Ferry", "Flight", "Train"], duration: "33 hours", cost: "₹13,800" },

    // Kavaratti to Port Blair
    { source: "Kavaratti", destination: "Port Blair", transportation: ["Ferry", "Flight"], duration: "28 hours", cost: "₹12,500" },

    // Kavaratti to Chandigarh
    { source: "Kavaratti", destination: "Chandigarh", transportation: ["Ferry", "Flight", "Train"], duration: "35 hours", cost: "₹14,000" },

    // Kavaratti to Daman
    { source: "Kavaratti", destination: "Daman", transportation: ["Ferry", "Flight", "Bus"], duration: "27 hours", cost: "₹12,200" },

    // Kavaratti to Delhi
    { source: "Kavaratti", destination: "Delhi", transportation: ["Ferry", "Flight", "Train"], duration: "34 hours", cost: "₹14,500" },

    // Kavaratti to Srinagar (Summer Capital)
    { source: "Kavaratti", destination: "Srinagar", transportation: ["Ferry", "Flight", "Train", "Bus"], duration: "40 hours", cost: "₹16,500" },

    // Kavaratti to Jammu (Winter Capital)
    { source: "Kavaratti", destination: "Jammu", transportation: ["Ferry", "Flight", "Train"], duration: "38 hours", cost: "₹15,800" },

    // Kavaratti to Leh (Ladakh)
    { source: "Kavaratti", destination: "Leh", transportation: ["Ferry", "Flight"], duration: "42 hours", cost: "₹17,500" },

    // Kavaratti to Puducherry
    { source: "Kavaratti", destination: "Puducherry", transportation: ["Ferry", "Flight", "Bus"], duration: "26 hours", cost: "₹11,800" },

    // Leh to Amaravati
    { source: "Leh", destination: "Amaravati", transportation: "Flight", duration: "5 hours", cost: "₹7,500" },

    // Leh to Itanagar
    { source: "Leh", destination: "Itanagar", transportation: "Flight", duration: "6 hours", cost: "₹8,000" },

    // Leh to Dispur
    { source: "Leh", destination: "Dispur", transportation: "Flight", duration: "5.5 hours", cost: "₹7,800" },

    // Leh to Patna
    { source: "Leh", destination: "Patna", transportation: "Flight", duration: "4.5 hours", cost: "₹6,500" },

    // Leh to Raipur
    { source: "Leh", destination: "Raipur", transportation: "Flight", duration: "5 hours", cost: "₹7,000" },

    // Leh to Panaji
    { source: "Leh", destination: "Panaji", transportation: "Flight", duration: "6 hours", cost: "₹8,500" },

    // Leh to Gandhinagar
    { source: "Leh", destination: "Gandhinagar", transportation: "Flight", duration: "4.5 hours", cost: "₹6,800" },

    // Leh to Chandigarh
    { source: "Leh", destination: "Chandigarh", transportation: "Flight", duration: "1.5 hours", cost: "₹3,500" },
    { source: "Leh", destination: "Chandigarh", transportation: "Bus", duration: "18 hours", cost: "₹1,200" },

    // Leh to Shimla
    { source: "Leh", destination: "Shimla", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },
    { source: "Leh", destination: "Shimla", transportation: "Bus", duration: "20 hours", cost: "₹1,500" },

    // Leh to Ranchi
    { source: "Leh", destination: "Ranchi", transportation: "Flight", duration: "5 hours", cost: "₹7,200" },

    // Leh to Bengaluru
    { source: "Leh", destination: "Bengaluru", transportation: "Flight", duration: "5.5 hours", cost: "₹7,500" },

    // Leh to Thiruvananthapuram
    { source: "Leh", destination: "Thiruvananthapuram", transportation: "Flight", duration: "6 hours", cost: "₹8,000" },

    // Leh to Bhopal
    { source: "Leh", destination: "Bhopal", transportation: "Flight", duration: "4.5 hours", cost: "₹6,700" },

    // Leh to Mumbai
    { source: "Leh", destination: "Mumbai", transportation: "Flight", duration: "4 hours", cost: "₹6,500" },

    // Leh to Imphal
    { source: "Leh", destination: "Imphal", transportation: "Flight", duration: "6 hours", cost: "₹8,200" },

    // Leh to Shillong
    { source: "Leh", destination: "Shillong", transportation: "Flight", duration: "6 hours", cost: "₹8,000" },

    // Leh to Aizawl
    { source: "Leh", destination: "Aizawl", transportation: "Flight", duration: "6 hours", cost: "₹8,100" },

    // Leh to Kohima
    { source: "Leh", destination: "Kohima", transportation: "Flight", duration: "6 hours", cost: "₹8,000" },

    // Leh to Bhubaneswar
    { source: "Leh", destination: "Bhubaneswar", transportation: "Flight", duration: "5.5 hours", cost: "₹7,500" },

    // Leh to Jaipur
    { source: "Leh", destination: "Jaipur", transportation: "Flight", duration: "3.5 hours", cost: "₹5,500" },

    // Leh to Gangtok
    { source: "Leh", destination: "Gangtok", transportation: "Flight", duration: "5.5 hours", cost: "₹7,500" },

    // Leh to Chennai
    { source: "Leh", destination: "Chennai", transportation: "Flight", duration: "5 hours", cost: "₹7,000" },

    // Leh to Hyderabad
    { source: "Leh", destination: "Hyderabad", transportation: "Flight", duration: "4.5 hours", cost: "₹6,800" },

    // Leh to Agartala
    { source: "Leh", destination: "Agartala", transportation: "Flight", duration: "6 hours", cost: "₹8,200" },

    // Leh to Lucknow
    { source: "Leh", destination: "Lucknow", transportation: "Flight", duration: "4 hours", cost: "₹6,500" },

    // Leh to Dehradun
    { source: "Leh", destination: "Dehradun", transportation: "Flight", duration: "3 hours", cost: "₹5,000" },

    // Leh to Kolkata
    { source: "Leh", destination: "Kolkata", transportation: "Flight", duration: "5 hours", cost: "₹7,200" },

    // Leh to Port Blair
    { source: "Leh", destination: "Port Blair", transportation: "Flight", duration: "7 hours", cost: "₹9,000" },

    // Leh to Daman
    { source: "Leh", destination: "Daman", transportation: "Flight", duration: "5 hours", cost: "₹7,000" },

    // Leh to Delhi
    { source: "Leh", destination: "Delhi", transportation: "Flight", duration: "1.5 hours", cost: "₹4,000" },
    { source: "Leh", destination: "Delhi", transportation: "Bus", duration: "24 hours", cost: "₹1,500" },

    // Leh to Srinagar
    { source: "Leh", destination: "Srinagar", transportation: "Bus", duration: "10 hours", cost: "₹800" },
    { source: "Leh", destination: "Srinagar", transportation: "Taxi", duration: "8 hours", cost: "₹2,000" },

    // Leh to Kavaratti
    { source: "Leh", destination: "Kavaratti", transportation: "Flight + Ship", duration: "10 hours", cost: "₹12,000" },

    // Leh to Puducherry
    { source: "Leh", destination: "Puducherry", transportation: "Flight", duration: "6.5 hours", cost: "₹8,500" },

    // Puducherry to Amaravati
    { source: "Puducherry", destination: "Amaravati", transportation: "Bus", duration: "12 hours", cost: "₹1,200" },
    { source: "Puducherry", destination: "Amaravati", transportation: "Train", duration: "10 hours", cost: "₹1,000" },
    { source: "Puducherry", destination: "Amaravati", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },

    // Puducherry to Itanagar
    { source: "Puducherry", destination: "Itanagar", transportation: "Train", duration: "48 hours", cost: "₹3,500" },
    { source: "Puducherry", destination: "Itanagar", transportation: "Flight", duration: "6 hours", cost: "₹7,000" },

    // Puducherry to Dispur
    { source: "Puducherry", destination: "Dispur", transportation: "Train", duration: "42 hours", cost: "₹3,200" },
    { source: "Puducherry", destination: "Dispur", transportation: "Flight", duration: "5.5 hours", cost: "₹6,500" },

    // Puducherry to Patna
    { source: "Puducherry", destination: "Patna", transportation: "Train", duration: "36 hours", cost: "₹2,800" },
    { source: "Puducherry", destination: "Patna", transportation: "Flight", duration: "4.5 hours", cost: "₹5,500" },

    // Puducherry to Raipur
    { source: "Puducherry", destination: "Raipur", transportation: "Train", duration: "24 hours", cost: "₹2,000" },
    { source: "Puducherry", destination: "Raipur", transportation: "Flight", duration: "3 hours", cost: "₹4,000" },

    // Puducherry to Panaji
    { source: "Puducherry", destination: "Panaji", transportation: "Bus", duration: "18 hours", cost: "₹1,500" },
    { source: "Puducherry", destination: "Panaji", transportation: "Train", duration: "16 hours", cost: "₹1,400" },
    { source: "Puducherry", destination: "Panaji", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },

    // Puducherry to Gandhinagar
    { source: "Puducherry", destination: "Gandhinagar", transportation: "Train", duration: "36 hours", cost: "₹3,000" },
    { source: "Puducherry", destination: "Gandhinagar", transportation: "Flight", duration: "4.5 hours", cost: "₹6,000" },

    // Puducherry to Chandigarh
    { source: "Puducherry", destination: "Chandigarh", transportation: "Train", duration: "40 hours", cost: "₹3,200" },
    { source: "Puducherry", destination: "Chandigarh", transportation: "Flight", duration: "5 hours", cost: "₹6,500" },

    // Puducherry to Shimla
    { source: "Puducherry", destination: "Shimla", transportation: "Train", duration: "42 hours", cost: "₹3,500" },
    { source: "Puducherry", destination: "Shimla", transportation: "Flight", duration: "5.5 hours", cost: "₹7,000" },

    // Puducherry to Ranchi
    { source: "Puducherry", destination: "Ranchi", transportation: "Train", duration: "34 hours", cost: "₹2,800" },
    { source: "Puducherry", destination: "Ranchi", transportation: "Flight", duration: "4.5 hours", cost: "₹5,500" },

    // Puducherry to Bengaluru
    { source: "Puducherry", destination: "Bengaluru", transportation: "Bus", duration: "7 hours", cost: "₹700" },
    { source: "Puducherry", destination: "Bengaluru", transportation: "Train", duration: "6 hours", cost: "₹600" },
    { source: "Puducherry", destination: "Bengaluru", transportation: "Flight", duration: "1 hour", cost: "₹2,000" },

    // Puducherry to Thiruvananthapuram
    { source: "Puducherry", destination: "Thiruvananthapuram", transportation: "Bus", duration: "12 hours", cost: "₹1,200" },
    { source: "Puducherry", destination: "Thiruvananthapuram", transportation: "Train", duration: "10 hours", cost: "₹1,000" },
    { source: "Puducherry", destination: "Thiruvananthapuram", transportation: "Flight", duration: "1.5 hours", cost: "₹2,500" },

    // Puducherry to Bhopal
    { source: "Puducherry", destination: "Bhopal", transportation: "Train", duration: "30 hours", cost: "₹2,500" },
    { source: "Puducherry", destination: "Bhopal", transportation: "Flight", duration: "4 hours", cost: "₹5,000" },

    // Puducherry to Mumbai
    { source: "Puducherry", destination: "Mumbai", transportation: "Train", duration: "24 hours", cost: "₹2,000" },
    { source: "Puducherry", destination: "Mumbai", transportation: "Flight", duration: "2 hours", cost: "₹4,000" },

    // Puducherry to Imphal
    { source: "Puducherry", destination: "Imphal", transportation: "Flight", duration: "6 hours", cost: "₹7,500" },

    // Puducherry to Shillong
    { source: "Puducherry", destination: "Shillong", transportation: "Flight", duration: "6.5 hours", cost: "₹7,800" },

    // Puducherry to Aizawl
    { source: "Puducherry", destination: "Aizawl", transportation: "Flight", duration: "6 hours", cost: "₹7,500" },
    
    // Puducherry to Kohima
    { source: "Puducherry", destination: "Kohima", transportation: "Flight", duration: "7 hours", cost: "₹8,000" },
    
    // Puducherry to Bhubaneswar
    { source: "Puducherry", destination: "Bhubaneswar", transportation: "Train", duration: "30 hours", cost: "₹2,500" },
    { source: "Puducherry", destination: "Bhubaneswar", transportation: "Flight", duration: "4.5 hours", cost: "₹5,500" },
    
    // Puducherry to Chandigarh
    { source: "Puducherry", destination: "Chandigarh", transportation: "Train", duration: "40 hours", cost: "₹3,200" },
    { source: "Puducherry", destination: "Chandigarh", transportation: "Flight", duration: "5 hours", cost: "₹6,500" },
    
    // Puducherry to Jaipur
    { source: "Puducherry", destination: "Jaipur", transportation: "Train", duration: "36 hours", cost: "₹3,000" },
    { source: "Puducherry", destination: "Jaipur", transportation: "Flight", duration: "4.5 hours", cost: "₹6,000" },
    
    // Puducherry to Gangtok
    { source: "Puducherry", destination: "Gangtok", transportation: "Flight", duration: "6.5 hours", cost: "₹7,500" },
    
    // Puducherry to Chennai
    { source: "Puducherry", destination: "Chennai", transportation: "Bus", duration: "3.5 hours", cost: "₹500" },
    { source: "Puducherry", destination: "Chennai", transportation: "Train", duration: "2.5 hours", cost: "₹300" },
    
    // Puducherry to Hyderabad
    { source: "Puducherry", destination: "Hyderabad", transportation: "Train", duration: "14 hours", cost: "₹1,500" },
    { source: "Puducherry", destination: "Hyderabad", transportation: "Flight", duration: "2 hours", cost: "₹3,500" },
    
    // Puducherry to Agartala
    { source: "Puducherry", destination: "Agartala", transportation: "Flight", duration: "6.5 hours", cost: "₹7,800" },
    
    // Puducherry to Lucknow
    { source: "Puducherry", destination: "Lucknow", transportation: "Train", duration: "38 hours", cost: "₹3,200" },
    { source: "Puducherry", destination: "Lucknow", transportation: "Flight", duration: "5 hours", cost: "₹6,500" },
    
    // Puducherry to Dehradun
    { source: "Puducherry", destination: "Dehradun", transportation: "Flight", duration: "6 hours", cost: "₹7,000" },
    
    // Puducherry to Kolkata
    { source: "Puducherry", destination: "Kolkata", transportation: "Train", duration: "36 hours", cost: "₹2,800" },
    { source: "Puducherry", destination: "Kolkata", transportation: "Flight", duration: "4.5 hours", cost: "₹5,500" },
    
    // Puducherry to Port Blair
    { source: "Puducherry", destination: "Port Blair", transportation: "Flight", duration: "2.5 hours", cost: "₹4,500" },
    
    // Puducherry to Daman
    { source: "Puducherry", destination: "Daman", transportation: "Flight", duration: "3.5 hours", cost: "₹5,000" },
    
    // Puducherry to Delhi
    { source: "Puducherry", destination: "Delhi", transportation: "Train", duration: "42 hours", cost: "₹3,500" },
    { source: "Puducherry", destination: "Delhi", transportation: "Flight", duration: "5.5 hours", cost: "₹7,000" },
    
    // Puducherry to Srinagar (Summer) / Jammu (Winter)
    { source: "Puducherry", destination: "Srinagar", transportation: "Flight", duration: "6.5 hours", cost: "₹8,000" },
    { source: "Puducherry", destination: "Jammu", transportation: "Flight", duration: "6 hours", cost: "₹7,500" },
    
    // Puducherry to Kavaratti
    { source: "Puducherry", destination: "Kavaratti", transportation: "Flight + Ship", duration: "8 hours", cost: "₹9,000" },
    
    // Puducherry to Leh (Ladakh)
    { source: "Puducherry", destination: "Leh", transportation: "Flight", duration: "7 hours", cost: "₹8,500" },
];

document.getElementById("transportForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const source = document.getElementById("source").value;
    const destination = document.getElementById("destination").value;

    // Find transportation data for the selected route
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; 

    const filteredData = transportationData.filter(entry => entry.source === source && entry.destination === destination);

    if (filteredData.length > 0) {
        filteredData.forEach(entry => {
            const transportInfo = document.createElement("p");
            transportInfo.textContent = `Mode: ${entry.transportation}, Duration: ${entry.duration}, Cost: ${entry.cost}`;
            resultsDiv.appendChild(transportInfo);
        });

        // Generate Google Maps Link
        const mapsLink = document.createElement("a");
        mapsLink.href = `https://www.google.com/maps/dir/${encodeURIComponent(source)}/${encodeURIComponent(destination)}`;
        mapsLink.target = "_blank";
        mapsLink.textContent = "View Route on Google Maps";
        mapsLink.style.display = "block";
        mapsLink.style.marginTop = "10px";
        resultsDiv.appendChild(mapsLink);
    } else {
        resultsDiv.textContent = "No transportation data available for the selected route.";
    }
});