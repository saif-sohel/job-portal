$(document).ready(function(){  

	//load_data();
    
	/* function load_data()
	{
		$.ajax({
			url:"controllers/Fetch_opersonal_information.php",
			method:"POST",
			success:function(data)
			{
				$('#user_data').html(data);
			}
		});
	} */

	//function load_data(){
		$.ajax({
			url:"controllers/Fetch_fpersonal_information.php",
			method:"POST",
			dataType:"json",
			success:function(data)
			{
				console.log(data);
				$('#name').val(data[0].name);
				$('#email').val(data[0].email);
				$('#skills').val(data[0].skills);
				$('#plink').val(data[0].portfolio_link);
			}
		});
	//};

	$(document).on('click','#upBtn', function (e) {
		$name = $('#name').val();
		$email = $('#email').val();
		$skills = $('#skills').val();
		$plink = $('#plink').val();
		$password = $('#password').val();

		if($('#password').val() == $('#cpassword').val())
		{
			$.ajax({
				url:"controllers/Action_fpersonal_information.php",
				method:"POST",
				dataType:"json",
				data:{
					'name': $name,
					'email': $email,
					'skills': $skills,
					'portfolio_link': $plink,
					'password' : $password,
					'action': 'update',
				},
				success:function(data)
				{
					alert('profile updated');
					location.reload();
				}
			});
		}
	});
});  