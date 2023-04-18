import React from 'react'

export default function Alert(props) {

	// First word capitalize for alert type
	const capitalizeFunc = ( word )=>{
		return ( word[0].toUpperCase() + word.slice(1) );
	}
	

  return (


	props.alertmsg && <div className= {`alert alert-${props.alertmsg.type} alert-dismissible fade show w-25 mx-auto mt-5`} role="alert">
		<strong> {capitalizeFunc(props.alertmsg.type)} </strong> {props.alertmsg.msg}
		<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
	</div>
  )
}
