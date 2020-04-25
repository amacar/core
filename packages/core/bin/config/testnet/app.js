module.exports = {
    cli: {
        core: {
            run: {
                plugins: {
                    include: ["@arkecosystem/core-magistrate-transactions", "@amacar/home-sensor-data"],
                },
            },
        },
        relay: {
            run: {
                plugins: {
                    include: ["@arkecosystem/core-magistrate-transactions", "@amacar/home-sensor-data"],
                },
            },
        },
        forger: {
            run: {
                plugins: {
                    include: ["@arkecosystem/core-magistrate-transactions", "@amacar/home-sensor-data"],
                },
            },
        },
        chain: {
            run: {
                plugins: {
                    include: ["@arkecosystem/core-magistrate-transactions", "@amacar/home-sensor-data"],
                },
            },
        },
        snapshot: {
            run: {
                plugins: {
                    include: ["@arkecosystem/core-magistrate-transactions", "@amacar/home-sensor-data"],
                },
            },
        },
    },
};
