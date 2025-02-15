// index.js
Page({
  data: {
    res: "这里将显示球面距离近似值",
    citieslist: [],
    cityName: "",
    lat1: "",
    lon1: "",
    citieslistuab: [],
    empty: false
  },
  submit: function () {
    var a = this.data.citieslist;
    var b = {};
    b["name"] = this.data.cityName;
    b["lat"] = this.data.lat1;
    b["lon"] = this.data.lon1;
    a.push(b);
    console.log(a);
    var c = this.data.citieslistuab;
    c.push("\n" + b.name + " " + b.lon + " " + b.lat);
    this.setData({
      citieslist: a,
      citieslistuab: c,
    });
  },
  calculateDistance: function () {
    const cities = this.data.citieslist;

    function toRadians(degrees) {
      return (degrees * Math.PI) / 180;
    }

    function haversineDistance(city1, city2) {
      const R = 6371; // 地球半径，单位为公里
      const dLat = toRadians(city2.lat - city1.lat);
      const dLon = toRadians(city2.lon - city1.lon);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(city1.lat)) *
          Math.cos(toRadians(city2.lat)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    }
    function calculateAllPaths(cities) {
      const paths = [];
      const startCity = cities[0];

      function recurse(currentPath, remainingCities) {
        if (remainingCities.length === 0) {
          currentPath.push(startCity);
          paths.push([...currentPath]);
          return;
        }

        for (let i = 0; i < remainingCities.length; i++) {
          const newPath = [...currentPath, remainingCities[i]];
          const newRemaining = [
            ...remainingCities.slice(0, i),
            ...remainingCities.slice(i + 1),
          ];
          recurse(newPath, newRemaining);
        }
      }

      recurse([startCity], cities.slice(1));
      return paths;
    }

    function calculatePathDistance(path) {
      let distance = 0;
      for (let i = 0; i < path.length - 1; i++) {
        distance += haversineDistance(path[i], path[i + 1]);
      }
      return distance;
    }

    const allPaths = calculateAllPaths(cities);
    let minDistance = Infinity;
    let shortestPath = [];

    for (const path of allPaths) {
      const distance = calculatePathDistance(path);
      if (distance < minDistance) {
        minDistance = distance;
        shortestPath = path;
      }
    }

    this.setData({
      res:
        "最短路径距离:" +
        minDistance +
        "公里" +
        "\n" +
        "最短路径:" +
        shortestPath.map((city) => city.name),
    });
  },
  delin: function () {
    this.setData({
      empty: true
    });
  },
  deldi: function () {
    this.setData({
      citieslist: [],
      citieslistuab: [],
    });
  },
  onCityInput(e) {
    this.setData({
      cityName: e.detail.value,
      empty: false
    });
    console.log("cnchanged", this.data.cityName);
  },
  onJingInput(e) {
    this.setData({
      lon1: e.detail.value,
      empty: false
    });
    console.log("lo1changed", this.data.lon1);
  },
  onWeiInput(e) {
    this.setData({
      lat1: e.detail.value,
      empty: false
    });
    console.log("la1changed", this.data.lat1);
  },
});
