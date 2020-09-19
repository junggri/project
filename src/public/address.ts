let width = 500;
let height = 500;
let daum: any = window["daum"];

export let getAddress = (add: HTMLInputElement, lat: HTMLInputElement, lon: HTMLInputElement, target?: any) => {
  new daum.Postcode({
    width: width,
    height: height,
    oncomplete: async function (data: any) {
      add.value = data.address;
      Promise.resolve(data)
        .then(() => {
          const { address } = data;
          return new Promise((resolve, reject) => {
            const geocoder = new daum.maps.services.Geocoder();
            geocoder.addressSearch(address, (result: any, status: any) => {
              if (status === daum.maps.services.Status.OK) {
                const { x, y } = result[0];
                resolve({ lat: y, lon: x });
              } else {
                reject();
              }
            });
          });
        })
        .then((result: any) => {
          lat.value = result.lat;
          lon.value = result.lon;
        });
    },
  }).open({
    left: window.screen.width / 2 - width / 2,
    top: window.screen.height / 2 - height / 2,
  });
};
