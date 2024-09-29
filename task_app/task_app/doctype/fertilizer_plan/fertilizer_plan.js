// Copyright (c) 2024, Shubham Kasar and contributors
// For license information, please see license.txt

frappe.ui.form.on('Fertilizer Plan', {
	plantation_master: function(frm) {
        if (frm.doc.plantation_master) {
            frappe.db.get_value('Plantation Master', frm.doc.plantation_master, ['crop_name', 'crop_variety', 'maturity_period_in_days'], (r) => {
                if (r) {
                    frm.set_value('crop_name', r.crop_name);
                    frm.set_value('crop_variety', r.crop_variety);
                    frm.set_value('maturity_period_in_days', r.maturity_period_in_days);
                }
            });
        }
    }
});
