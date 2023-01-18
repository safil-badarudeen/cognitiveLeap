const secureResponse = (data)=>{
    return {
        userId:data._id,
        username:data.name,
        mobile :data.mobile
    }
}

module.exports = {secureResponse}