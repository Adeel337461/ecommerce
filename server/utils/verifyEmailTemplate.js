const verifyEmailTemplate = ({name,url})=>{
    return`
<p>Dear ${name}</p>    
<p>Thank you for registering Ecommerce.</p>   
<a href=${url} style="    color: white;
    background-color: orange;
    padding: 10px 20px;
    border-radius: 5px;
    display: inline-block;
    text-decoration: none;">
    Verify Email
</a>
`
}

export default verifyEmailTemplate