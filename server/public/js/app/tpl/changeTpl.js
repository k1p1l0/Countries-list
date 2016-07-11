tpl['change'] = '<caption>Add new Country</caption>\
					<tr>\
                    <td>\
                        <label for="name">Name</label>\
                    </td>\
                    <td>\
                    	<input type="hidden" name="_id" value="<%= _id %>">\
                        <input type="text" name="Name" value="<%= Name %>">\
                    </td>\
                </tr>\
               	<tr>\
                    <td>\
                        <label for="capital">Capital</label>\
                    </td>\
                    <td>\
                        <input type="text" name="Capital" value="<%= Capital %>">\
                    </td>\
                </tr>\
               	<tr>\
                    <td>\
                        <label for="time">Continent</label>\
                    </td>\
                    <td>\
                        <input type="text" name="Continent" value="<%= Continent %>">\
                    </td>\
                </tr>\
                <tr>\
                    <td>\
                        <label for="population">Population</label>\
                    </td>\
                    <td>\
                        <input type="text" name="Population" value="<%= Population %>">\
                    </td>\
                </tr>\
                <tr>\
                    <td colspan="3"><button class="edit">Edit</button></td>\
                </tr>';