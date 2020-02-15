module.exports = {
    findTripsByUser: user => {
        throw new Error("TripDAO should not be invoked on an unit test.");
    }
}
