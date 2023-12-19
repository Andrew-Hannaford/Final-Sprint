fetch('./GoalieStats.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(goalie => {
            console.log(`
             Name: ${goalie.name}
             Games Played: ${goalie.gamesPlayed}
             Seasons: ${goalie.seasons}
             Wins per Season Average: ${getWinsPerSeasonAvg(goalie.seasons, goalie.wins).toFixed(1)}
             Wins: ${goalie.wins}
             Loses: ${goalie.loses}
             Ties/OTL(Overtime Losses): ${getTies(goalie.wins, goalie.gamesPlayed, goalie.loses)}
             Goals Against: ${goalie.goalsAgainst}
             Goals Against Average: ${getGAA(goalie.goalsAgainst, goalie.timeOnIce).toFixed(2)}
             Shots Against: ${goalie.shotsAgainst}
             Saves: ${getSaves(goalie.goalsAgainst, goalie.shotsAgainst)}
             Save Percentage: ${getSavePercentage(goalie.goalsAgainst, goalie.shotsAgainst).toFixed(3)}
             `)

        });
    })

    .catch(error => {
        console.error(error);
    });

    function getTies(wins, gamesPlayed, loses, ties) {
        ties = gamesPlayed - wins - loses;
        return ties;    
    }

    function getGAA(goalsAgainst, timeOnIce)  {
        gaa = goalsAgainst * 60 / timeOnIce;
        return gaa;
    }

    function getSaves(goalsAgainst, shotsAgainst)  {
        saves = shotsAgainst - goalsAgainst
        return saves
    }

    function getSavePercentage(goalsAgainst, shotsAgainst)  {
        saves = shotsAgainst - goalsAgainst;
        savePercent = saves / shotsAgainst;
        return savePercent;
    }

    function getWinsPerSeasonAvg(seasons, wins)  {
        winPerSeason = wins / seasons;
        return winPerSeason;
    }