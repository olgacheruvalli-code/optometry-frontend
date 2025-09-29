export const districts = [
  "Thiruvananthapuram","Kollam","Pathanamthitta","Alappuzha",
  "Kottayam","Idukki","Ernakulam","Thrissur","Palakkad",
  "Malappuram","Kozhikode","Wayanad","Kannur","Kasaragod"
];

const baseInstitutions = {
  Thiruvananthapuram: [
    "CHC Anchuthengu","CHC Aryanad","CHC Kesavapuram","CHC Vellanad","CHC Vellarada",
    "THQH Chirayinkeezhu","THQH Parassala","District Hospital Nedumangad"
  ],
  Kollam: [
    "CHC Anchal","CHC Chavara","CHC Kulathuppuzha","CHC Mynagappally","CHC Nedumpana",
    "THQH Kottarakkara","THQH Punalur","THQH Sasthamcotta",
    "District Hospital Kollam (A. A. Rahim memorial)"
  ],
  Pathanamthitta: ["THQH Thiruvalla","District Hospital Kozhencherry"],
  Alappuzha: [
    "CHC Arookutty","CHC Champakulam","CHC Chempumpuram","CHC Chunakkara","CHC Edathua",
    "District Hospital Chengannur","District Hospital Mavelikara"
  ],
  Kottayam: ["CHC Edayarikkapuzha","CHC Kumarakom","THQH Pampady","District Hospital Kottayam"],
  Idukki: ["CHC Muttom","CHC Purapuzha","CHC Vandiperiyar","THQH Peermade","District Hospital Thodupuzha"],
  Ernakulam: ["CHC Kalady","CHC Moothakunnam","District Hospital Aluva","THQH Tripunithura"],
  Thrissur: ["District Hospital Wadakkanchery"],
  Palakkad: ["CHC Katampazhipuram","CHC Chalissery","District Hospital Palakkad"],
  Malappuram: [
    "CHC Chungathara","CHC Edapal","CHC Kalikavu","District Hospital Nilambur","THQH Tirurangadi"
  ],
  Kozhikode: [
    "CHC Mukkam","CHC orkkattery","CHC Narikkuni","District Hospital Vadakara","Taluk Hospital Perambra",
    "CHC ulliery","General Hospital Kozhikod","CHC Thalakkulathur","CHC Thiruvallur","CHC Olavanna",
    "Taluk Hospital Farook","CHC Cheruvannur","CHC Thamarassery","Taluk Hospital Koyilandy",
    "CHC Thiruvangoor","Taluk Hospital Balussery","PHC Meppayur","CHC Melady","CHC Valayam",
    "Taluk Hospital Kuttiadi","Taluk Hospital Nadapuram","CHC Cheruvadi"
  ],
  Wayanad: ["CHC Meenangdi","CHC Panamaram","THQH Sulthan Bathery","District Hospital Mananthavady"],
  Kannur: ["CHC Pappinissery","THQH Taliparamba","District Hospital Kannur"],
  Kasaragod: ["CHC Cheruvathur","CHC Periye","District Hospital Kanhangad"]
};

export const districtInstitutions = Object.fromEntries(
  Object.entries(baseInstitutions).map(([district, insts]) => [
    district,
    [...insts, `DOC ${district}`] // add DOC entry
  ])
);
