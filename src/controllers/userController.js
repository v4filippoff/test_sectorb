const userController = {

    async registerUser(request, response) {
        response.send('hello')
    },

    async loginUser(request, response) {
        response.send('hello')
    },

    async getProfile(request, response) {
        response.send('hello')
    },

    async getAllProfiles(request, response) {
        response.send("hello")
    },
  
    async editProfile(request, response) {
        response.end('hello')
    },
};

export default userController;