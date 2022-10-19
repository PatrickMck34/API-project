    "SpotImages": [
        {
          "id": 1,
          "url": "image url"
          "url": "image url",
          "preview": true
        },
        {
          "id": 2,
          "url": "image url",
          "preview": false
        }
      ],
      "Owner": {
@@ -460,7 +466,8 @@ Create and return a new image for a spot specified by id.

    ```json
    {
      "url": "image url"
      "url": "image url",
      "preview": true
    }
    ```

@@ -474,6 +481,7 @@ Create and return a new image for a spot specified by id.
    {
      "id": 1,
      "url": "image url",
      "preview": true
    }
    ```

@@ -659,14 +667,15 @@ Returns all the reviews written by the current user.
            "lat": 37.7645358,
            "lng": -122.4730327,
            "name": "App Academy",
            "price": 123
            "price": 123,
            "previewImage": "image url"
          },
          "SpotImages": [
          "ReviewImages": [
            {
              "id": 1,
              "url": "image url"
            }
          ],
          ]
        }
      ]
    }
@@ -836,7 +845,7 @@ Create and return a new image for a review specified by id.
    ```json
    {
      "id": 1,
      "url": "image url",
      "url": "image url"
    }
    ```

  8  
Kanban-cards-AirBnB.md
@@ -98,7 +98,7 @@ Create and return a new image for a spot specified by id.
- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the spot is authorized to add an image
- [ ] New image exists in the database after request
- [ ] Image data returned includes the `id` and `url`
- [ ] Image data returned includes the `id`, `url`, and `preview`
- [ ] Error response with status 404 is given when a spot does not exist with
  the provided `id`

@@ -124,7 +124,7 @@ Returns the details of a spot specified by its id.
  and `updatedAt`
- [ ] Spot data returns aggregate data for `numReviews` and `avgStarRating`
- [ ] Spot data returns associated data for `SpotImages`, an array of image
  data including the `id` and `url`
  data including the `id`, `url`, and `preview`
- [ ] Spot data returns associated data for `Owner`, including the `id`,
  `firstName`, and `lastName`
- [ ] Error response with status 404 is given when a spot does not exist with
@@ -200,8 +200,8 @@ Returns all the reviews written by the current user.
- [ ] Review data returns associated data for `User`, including the `id`,
  `firstName`, and `lastName`
- [ ] Review data returns associated data for `Spot`, including the `id`,
  `ownerId`, `address`, `city`, `state`, `country`, `lat`, `lng`, `name`, and
  `price`
  `ownerId`, `address`, `city`, `state`, `country`, `lat`, `lng`, `name`,
  `price`, and `previewImage`
- [ ] Review data returns associated data for `ReviewImages`, an array of image
  data including the `id` and `url`







![API project (1)](https://user-images.githubusercontent.com/106417897/196821443-dc02c1d3-be46-4403-bd82-43e2889d8253.png)