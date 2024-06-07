import React from 'react'
import Navbar from './Navbar'

const ViewBook = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Published Year</th>
                        <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Alice in wonderland</td>
                        <td>Lewis carrol</td>
                        <td>2002</td>
                        <td>500</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Ancient Mariner</td>
                        <td>Coleridge</td>
                        <td>2005</td>
                        <td>200</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Arms and the man</td>
                        <td>G B Shaw</td>
                        <td>2008</td>
                        <td>250</td>
                        </tr>
                        <tr>
                        <th scope="row">4</th>
                        <td>Around the world</td>
                        <td>Jules</td>
                        <td>2002</td>
                        <td>700</td>
                        </tr>
                        <tr>
                        <th scope="row">5</th>
                        <td>Anna Carenina</td>
                        <td>Leo Tolstoy</td>
                        <td>2001</td>
                        <td>500</td>
                        </tr>
                        <tr>
                        <th scope="row">6</th>
                        <td>Pride and Prejudice</td>
                        <td>Jane</td>
                        <td>2002</td>
                        <td>900</td>
                        </tr>
                        <tr>
                        <th scope="row">7</th>
                        <td>Gulliver's Travel</td>
                        <td>Thomas</td>
                        <td>2002</td>
                        <td>500</td>
                        </tr>
                        <tr>
                        <th scope="row">8</th>
                        <td>Utopia</td>
                        <td>Tagore</td>
                        <td>2002</td>
                        <td>500</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewBook