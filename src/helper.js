export default class DistrictRepository {
  constructor(data){
    this.data = data;
    this.stats = this.stats();
  }

  stats(){
    let districts = this.data.reduce((districts, district) => {

      if (isNaN(district.Data)){
        district.Data = 0;
      }

      let upperCaseDistrict = district.Location.toUpperCase();

      if (!districts[upperCaseDistrict]) {
        districts[upperCaseDistrict] = {
          location: upperCaseDistrict,
          stats: {[district.TimeFrame]: Math.round(district.Data * 1000) / 1000}
        };
      } else {
        districts[upperCaseDistrict].stats = {
          ...districts[upperCaseDistrict].stats,
          [district.TimeFrame] : Math.round(district.Data * 1000) / 1000};
      }

      return districts;
    }, {});

    return districts;
  }

  // findByName(name) {
  //   let statsArray = Object.keys(this.stats);
  //
  //   if (!name.toUpperCase() || !statsArray.includes(name.toUpperCase())){
  //     return undefined;
  //   } else if (statsArray.includes(name.toUpperCase())) {
  //     return {
  //       location: name.toUpperCase(),
  //       stats: this.stats[name.toUpperCase()]
  //     };
  //   }
  // }

  findByName = (name) => {

    if (name && this.stats[name.toUpperCase()]){
      return this.stats[name.toUpperCase()];
    }
    // return {
    //   location: this.stats[name.toUpperCase()];
    //
    // }
  }

  findAllMatches = (districtName) => {

    let districtsArray = Object.keys(this.stats);

    let mapDistricts = districtsArray.map(district => { return this.stats[district]; });

    if (!districtName){
      return mapDistricts;
    } else if (districtName){
      let filterDistricts = districtsArray.filter(district=>{ return district.includes(districtName.toUpperCase()); });
      return filterDistricts;
    } else {
      return [];
    }
  }
}
