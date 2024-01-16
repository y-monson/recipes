// Get the select element
var countrySelect = document.getElementById('country');

// Array of countries 
var countries = ['Afghanistan','Albania','Algeria','Andorra','Angola',
'Argentina','Australia','Austria','Azerbaijan','Bahamas','Bahrain',
'Bangladesh','Barbados','Belarus','Belgium','Bermuda','Bhutan','Bolivia',
'Botswana','Brasil','Bulgaria','Burundi','Cambodia','Canada','Cayman Islands',
'Chad','Chile', 'China','Colombia','Costa Rica','Croatia','Cuba',
'Cyprus','Cuba','Dominican Republic','Denmark','Ecuador','Egypt',
'El Salvador','Eritrea','Estonia','Ethiopia','Fiji','Finland','France','Gabon','Georgia',
'Ghana','Gibraltar','Greese','Grenada','Guatemala','Honduras', 'Hungary',
'Hong Kong','Iceland','India','Indonesia','Iraq','Iran','Irland','Israel','Italy',
'Jamaica','Japan','Jordan','Kambodia','Kazakhstan',
'Kenya','Kiribati','Korea','Laos','Latvia','Libanon',
'Liberia','Lithuania','Luxemburg','Madagascar','Malawi','Malaysia',
'Maldives','Mali','Malta','Mexico','Mauritania','Monaco','Myanmar','Namibia',
'Netherlands','New Zeland','Nepal',
'Nicaragua','Niger','Nigeria','Norway','Oman','Pakistan','Panama',
'Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania',
'Russia','Rwanda','Saint Lucia','Samoa','San Marino','Saudi Arabia','Senegal',
'Serbia','Seychelles', 'Sierra Leone',,'Singapore','Slovakiea','Sloveniea',
'South Africa', 'Spain', 'Sri Lanka','Sudan','Sweden', 'Switzerland', 'Syria',
'Tanzania','Thailand','Togo','Tonga','Tunisia',
'Turkey','Turkmenistan','Uganda','Ukraine','Uruguay','USA','Uzbekistan',
'Venezuela','Vietnam','Zambia','Zimbabwe'];

// Populate the select element with options
for (var i = 0; i < countries.length; i++) {
    var option = document.createElement('option');
    option.value = countries[i];
    option.text = countries[i];
    countrySelect.appendChild(option);
}