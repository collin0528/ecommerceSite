
let display=localStorage.getItem('users');
		display = JSON.parse(display);

		let table_names = `<table class='table'>
								<thead>
								<tr>
								<th> Firstname</th>
								<th> Surname</th>
								<th> mail</th>
								<th> password</th>
								<th> mobile</th>
                                <th> Remove</th>
								</tr>

								</thead>
								<tbody>`;


								display.forEach((dis)=>{
									console.log(dis)
									let firstname = dis.firstname;
									let surname = dis.surname;
									let mail = dis.mail;
									let password = dis.password;
									let mobile = dis.mobile;
							


							table_names+= `<tr>
												<td> ${firstname}</td>
												<td> ${surname}</td>
												<td> ${mail}</td>
												<td> ${password}</td>
												<td> ${mobile}</td>
												<td> <button onclick="removeMessage('${dis.id}')">delete</button></td>
                                                

											</tr>`
												// console.log(firstname);



									});
								table_names+= `</tbody></table>`;
							

						document.getElementById("para").innerHTML = table_names;


						function removeMessage(mess_id){
	
							let messageRemove = JSON.parse(localStorage.getItem("users"));
						  
							  for(let i = 0; i < messageRemove.length; i++){
						  
								  if(messageRemove[i].id == mess_id){
									  messageRemove.splice(i, 1);
						  
									 localStorage.setItem('users', JSON.stringify(messageRemove));
									 break;
								  }
						  
							   }
						  
							   location.reload();
						  
						   }
						  
						  
						   function removeAll (){
							   let removeAll = localStorage.removeItem("users");
							   location.reload();
						   }
						  
