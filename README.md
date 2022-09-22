# NLW eSports

## versions

- [ ] [Web Version](https://github.com/ViniZap4/NLW-eSports-web)
- [ ] [Mobile Version](https://github.com/ViniZap4/NLW-eSports-mobile)
- [x] Back-end Version

## Description
A project with nlw eSport event, this repo is the back-end version of nlw eSport made with nodejs (express).

## start application
For start aplication you will need `nodejs` installed ([download Nodejs](https://nodejs.org/en/download/)).

- On root repository run `npm install` for install node modules;
- run `npm run dev` to start dev aplication.

## Routes

### List Games
- HTTP method: **GET** 
- Route:`/games`

#### Example Source:
```
[
  {
    "id": "144647f0-184b-4ef5-8945-b15eb62637fd",
    "title": "World of Warcraft",
    "bannerUrl": "https://static-cdn.jtvnw.net/ttv-boxart/18122-285x380.jpg",
    "_count": {
      "ads": 2
    }
  }
]
```

### Create ad
- HTTP method: **Post** 
- Route:`/games/:id/ads`

#### Example body (JSON):
```
{
	"name": "fulano da silva",
	"yearsPlaying": 1,
	"discord": "fulanosilva#0111",
	"weekDays": [0, 6 ,5],
	"hourStart": "20:13
	"hourEnd": "21:14",
	"useVoiceChannel": false
}
```

### List ads by game 
- HTTP method: **GET** 
- Route:`/games/:id/ads`

#### Example Source:
```
[
  {
    "id": "7ceac3c2-e6ca-47af-9bdb-a87d7e62bade",
    "name": "fulano da silva",
    "weekDays": [
      "0",
      "6",
      "5"
    ],
    "useVoiceChannel": false,
    "yearsPlaying": 1,
    "hourStart": "20:13",
    "hourEnd": "21:14"
  }
[
```

### Get Discord by ad
- HTTP method: **Get** 
- Route:`/ads/:id/discord`

#### Example Source:
```
{
	"discord": "fulanosilva#0111"
}
```
