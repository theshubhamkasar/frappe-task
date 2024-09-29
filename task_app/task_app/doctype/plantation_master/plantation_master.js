// Copyright (c) 2024, Shubham Kasar and contributors
// For license information, please see license.txt

frappe.ui.form.on("Plantation Master", {

	crop_master: function(frm) {
        let crop_master_name = frm.doc.crop_master;

        if (crop_master_name) {
            frappe.db.get_doc('Crop Master', crop_master_name).then(crop_master => {
                frm.set_value('crop_name', crop_master.crop_name); 
                frm.set_value('crop_variety', crop_master.crop_variety); 
                frm.set_value('maturity_period_in_days', crop_master.maturity_period_in_days);   
            }).catch(err => {
                console.error('Error fetching Crop Master:', err);
            });
        } else {
            frm.set_value('crop_name', '');
            frm.set_value('crop_variety', '');
            frm.set_value('maturity_period_in_days', '');
        }
    },

	
	farm_master: function(frm) {
		let farm_master_name = frm.doc.farm_master;
		
        if (farm_master_name) {
			frappe.db.get_doc('Farm Master', farm_master_name).then(farm_master => {
                frm.set_value('survey_no', farm_master.survey_no); 
                frm.set_value('farmer_name', farm_master.farmer_name); 
                frm.set_value('village', farm_master.village);   
                frm.set_value('dist', farm_master.dist);   
                frm.set_value('farm_area_in_acres', farm_master.farm_area_in_acres);   
                frm.set_value('soil_type_black__red__grey', farm_master.soil_type_black__red__grey);   
                frm.set_value('irrigation_method_river__borewell__other', farm_master.irrigation_method_river__borewell__other);   
            }).catch(err => {
                console.error('Error fetching Farm Master:', err);
            });
        } else {
            frm.set_value('survey_no', '');
            frm.set_value('farmer_name', '');
            frm.set_value('village', '');
            frm.set_value('dist', '');
            frm.set_value('farm_area_in_acres', '');
            frm.set_value('soil_type_black__red__grey', '');
            frm.set_value('irrigation_method_river__borewell__other', '');
        }
    },


	

});
