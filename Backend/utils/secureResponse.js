const secureResponse = (data)=>{
    return {
        userId:data._id,
        username:data.username,
        mobile :data.mobile
    }
}

module.exports = {secureResponse}