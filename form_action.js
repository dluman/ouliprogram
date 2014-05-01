function oulipoperation(form_fields)
{
	var radio = $('input[name="inclexcl"]:checked').val();
	var lttrs = $('input[name="oulipostools-lttrs"]').val();
	var combo = $( "#oulipostest").val();
	var txtsrc = $('#oulipostext').val();
	var strict = $('input[name="oulipostrict"]').val();
	var lttr_array = new Array();
	var nobreaks = txtsrc.replace(/(\r\n|\n|\r)/gm," ");
		nobreaks = nobreaks.replace(/:\s/g," ");
		nobreaks = nobreaks.trim();
		lttr_array = lttrs.split(",");
		if(combo=="incl")
		{
			tautogram(nobreaks,lttr_array);
		}
		if(combo=="excl")
		{
			lipogram(nobreaks,lttr_array);
		}
		if(combo=="pris")
		{
			var dilemmarray = new Array("b","d","f","g","h","j","k","l","p","q","t","y");
			lipogram(nobreaks, dilemmarray);
		}
		if(combo=="hom")
		{
			consonant(nobreaks);
		}
		if(combo=="fib")
		{
			fib(nobreaks);
		}
		if(combo=="bpres")
		{
			var alpha = new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
			var lttr_filter = new Array();
				for(i=0;i<=lttr_array.length-1;i++)
				{
					var k = alpha.indexOf(lttr_array[i]);
					if(k != -1) {
						alpha.splice(k,1);
					} else {
					}
				}
			lipogram(nobreaks,alpha);
		}
		if(combo=="univ")
		{
			var vowels = new Array('a','e','i','o','u');
				for(i=0;i<=lttr_array.length-1;i++)
				{
					var k = vowels.indexOf(lttr_array[i]);
					if (k != -1) {
						vowels.splice(k,1)
					} else {
					}
				}
			lipogram(nobreaks,vowels);
		}
	lttr_array = [];
	return false;
}
function tautogram(text,lttr_array)
{
	var output = new String;
	var trim_me = "";
	var res = "";
		if (lttr_array.length > 1)
		{
			for(i=0;i<=lttr_array.length-1;i++)
			{
				try
				{
					var pattern = new RegExp("(\\b)"+lttr_array[i]+"[\\w+]*","ig");
						trim_me = text.match(pattern,"").toString();
							res = res.concat(trim_me) + " ";
					output = res.replace(","," ").trim();
						if(strict=="on")
						{
						}
				}
				catch(err)
				{
				
				}
			}
		} else if (lttr_array.length <= 1)
		{
			try
			{
				var pattern = new RegExp("(\\b)"+lttr_array[0]+"[\\w+]*","ig");
					trim_me = text.match(pattern,"").toString();
				output = trim_me.replace(","," ").trim();
					if(strict=="on")
					{
					}
			}
			catch(err)
			{
			
			}
		}
	$('#oulipostext').val(output);
	lttr_array = [];
	text = "";
	$('.button .submit').disabled = false;
	$('oulipostools-lttrs').val("");
}
function lipogram(text, lttr_array)
{
	var output = new String;
	var trim_me = "";
	var res = ""
		if (lttr_array.length > 1)
		{
			for(i=0;i<=lttr_array.length-1;i++)
			{
				try
				{
					trim_me = "";
					var pattern = new RegExp("(^|\\S*)"+lttr_array[i]+"[\\S+]*","ig");
						trim_me = text.replace(pattern,"").toString();
						output = trim_me.trim();
						if(strict=="on")
						{
						}
				}
				catch (err)
				{
					
				}
				text = output;
			}
		} else if (lttr_array.length <= 1)
		{
			try
			{
				var pattern = new RegExp("(^|\\S*)"+lttr_array[0]+"[\\S+]*","ig");
					trim_me = text.replace(pattern,"").toString();
				output = trim_me.trim();
					if(strict=="on")
					{
					}
			}
			catch (err)
			{
			}
		}
	$('#oulipostext').val(output);
	lttr_array = [];
	text = "";
	$('.button .submit').disabled = false;
	$('oulipostools-lttrs').val("");
}
function strictmode(text,lttr_array)
{
	var strictproduct = text;
		if(lttr_array.length > 1)
		{
			for(i=0;i<=lttr_array.length-1;i++)
			{
			}
		} else if(lttrs_array.length <= 1) {
			
		}
}
function consonant(text)
{
	var matches = text.replace(/[aeiou]/ig," ");
	$('#oulipostext').val(matches);
	text = "";
	$('.button .submit').disabled = false;
}
function fib(text)
{
	    var a,b,result;
		var txtcount = new Array();
			txtcount = text.split(" ");
		var sequence = new Array();
		var selections = "";
		var fib_index = 0;
		//Set up the sequence based on the number of words
			a=0;
			b=1;
			result=b;
				for(var i=0;i<txtcount.length-1;i++)
				{
					sequence.push(b);
					result=a+b;
					a=b;
					b=result;
				}
		//Select only those words and banish them to the depths of Hell. Or, out of the buffer.
		for(k=0;k<=sequence.length-1;k++)
		{
			fib_index = sequence[k]-1;
			if(sequence[k] > txtcount.length)
			{
			} else {
				selections += txtcount[fib_index] + " ";
			}
		}
		$('#oulipostext').val(selections);
}
