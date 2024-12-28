import { test, expect } from '@playwright/test';
var userid;

test('first', async ({ request }) => {
  const response=await request.post("/booking",
  {
data:{ "firstname": "morpheus",
    "lastname": "leader",
    "totalprice": 100,
    "depositpaid": true,
    "bookingdates": 
    {
        "checkin":"2018-01-01",
        "checkout":"2018-01-01"

    },
    "additionalneeds":"superbowls"
    

},
    headers:{"Accept":"application/json"}

  })
  const body=await response.headers();
console.log(body);
console.log(body);
console.log(body);
  const body1=await response.headers();

});
