import React, { useState } from 'react'

export default function Form(props) {


	const [ textvalue , settextvalue ] = useState("");

	let Textarea = document.querySelector("#textarea");
	let findtextarea = document.querySelector("#findtextarea");
	let replacetextarea = document.querySelector("#replacetextarea")

	function handleChange(event) {
		settextvalue(event.target.value);
	}


	const tolowercase = ()=>{
		settextvalue(textvalue.toLowerCase());
		props.showalert("Text changed to LowerCase" , "success");
	}

	const touppercase = ()=>{
		settextvalue(textvalue.toUpperCase());
		props.showalert("Text changed to UpperCase" , "success");
	}

	const Trim = ()=>{
		let newstr =  textvalue.replace(/\s+/g, ' ');
		settextvalue(newstr);
		props.showalert("Text Trimed Successfully" , "success");
	}

	const copyFunc = ()=>{
		Textarea.select();
		document.execCommand("copy");
		props.showalert("Text Copied Successfully" , "success");
	}


	const clearFunc = ()=>{
		settextvalue("");
		props.showalert("Text Cleared Successfully" , "success");
	}

	const findFunc = ()=>{
		const searchRegex = /he/;
		const highlightedString = Textarea.value.replace(searchRegex, '<span style="background-color: yellow">$&</span>');
		
	}

	const replaceFunc = ()=>{
		const newstr = Textarea.value.replace( findtextarea.value , replacetextarea.value );
		settextvalue( newstr );
		props.showalert("Text Replaced Successfully" , "success");
	}


	const handleReplaceAll = () => {
		const newValue = Textarea.value.replace(new RegExp( findtextarea.value , 'g'), replacetextarea.value );
		settextvalue(newValue);
	};

	// word count
	
	const str = textvalue;
	let trimstr =  textvalue.replace(/\s+/g, ' ');
	
	// using fiter we exclude all letter which have length zero
	let words = trimstr.split(" ").filter((ele) =>{ return ele.length !== 0});
	let wordCount = words.length;
	
	
	let letterCount = str.length;
	





  return (
	<div className='container mt-5'>

		<div className="mb-5">
	
			<label htmlFor="exampleFormControlTextarea1" className="form-label"> 
			<div>
			<h1 className='' style={{ color : props.darktext !== "Dark" ? "white" : "black" }}>
				 {props.title} </h1> 		
			</div>
			</label>

			<span className='float-end mt-4 me-4' 
			style={{ color : props.darktext !== "Dark" ? "#E7F6F2" : "black" }}>
		    {`words - ${wordCount} | letters - ${letterCount}`} </span>


			<textarea className="form-control" id="textarea" rows="10" placeholder='Enter Text Here' value={textvalue} onChange={handleChange} style={{ backgroundColor : props.darktext !== "Dark" ? "black" : "white" ,
			color : props.darktext !== 'Dark' ? "white" : "black" }}>

			</textarea>
		</div>

		<div>
			<button disabled={wordCount === 0} type="button" className={`btn btn-outline-secondary me-5 mt-2`} onClick={tolowercase}  
			style={{ color : props.darktext !== "Dark" ? "#E7F6F2" : "black" }}>LowerCase</button>
			<button disabled={wordCount === 0} type="button" className="btn btn-outline-secondary me-5 mt-2" onClick={Trim}
			style={{ color : props.darktext !== "Dark" ? "#E7F6F2" : "black" }}>Trim</button>
			<button disabled={wordCount === 0} type="button" className="btn btn-outline-secondary me-5 mt-2" onClick={touppercase}
			style={{ color : props.darktext !== "Dark" ? "#E7F6F2" : "black" }}>UpperCase</button>
			<button disabled={wordCount === 0} type="button" className="btn btn-outline-secondary me-5 mt-2" onClick={copyFunc}
			style={{ color : props.darktext !== "Dark" ? "#E7F6F2" : "black" }}>Copy</button>
			<button disabled={wordCount === 0} type="button" className="btn btn-outline-secondary me-5 mt-2" onClick={clearFunc}
			style={{ color : props.darktext !== "Dark" ? "#E7F6F2" : "black" }}>Clear</button>
			
		</div>

		<div className='mb-5'>
			<div className='row mt-5 ms-1 me-2'>	
				<button disabled={wordCount === 0} onClick={handleReplaceAll} 
				style={{ color : props.darktext !== "Dark" ? "#E7F6F2" : "black" }}  
				className="btn btn-outline-secondary me-5 col-lg-1">Replace All</button>
				<textarea cols="30" rows="2" id='findtextarea' className='col-lg-4  pt-4 mt-2 mb-2' 
				style={{ backgroundColor : props.darktext !== "Dark" ? "#ECF2FF" : "white" }}
				placeholder='Enter text to be replaced' ></textarea >
			</div>
			<div className='row mt-3 ms-1 me-2'>
				<button disabled={wordCount === 0} type="button" className="btn btn-outline-secondary me-5 col-lg-1" onClick={replaceFunc}
				style={{ color : props.darktext !== "Dark" ? "#E7F6F2" : "black" }}>Replace</button>
				<textarea cols="30" rows="2" id='replacetextarea' className='col-lg-4 pt-4 mt-2 mb-2'
				style={{ backgroundColor : props.darktext !== "Dark" ? "#ECF2FF" : "white" }}
				placeholder='Enter text to be replaced with' ></textarea>
			</div>
		</div>




	</div>
  )
}
