// For a google+ api key, go to:
// http://console.developers.google.com
// and enable the google+ api. Create credentials
// and put them in the cooresponding spots below.

// for the database, you can set up a simple mongodb
// deployement here:
// http://mlab.com
// Create a new user and paste the dbURI below.
module.exports = {
    google: {
        clientID: "224974034440-t8pcn4mr7rbh57lgqg9nlv83gkh9emab.apps.googleusercontent.com",
        clientSecret: "Q48jJu82DkDCDVs_SGiKuPbg",
    },
    RDS: {
        username:"mbrannen",
        password:"d8SA!mvchael",
        host:"aa89kqs88mjkyz.cj0z9zmfp94i.us-east-2.rds.amazonaws.com",
        port: "3306",
    },
    session: {
        cookieKey: "dontstealmycookies"
    }
}