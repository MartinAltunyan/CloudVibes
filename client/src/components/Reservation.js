import React, { Component } from 'react';
import Pic5 from '../img/IMG_4719.jpg';





class Reservation extends Component {




	onSubmit(e) {
		e.preventDefault()
		console.log(e.target)
	}


	render() {
		return (
			<div>




				<section class="page-section clearfix">
					<div class="container">
						<div class="intro">
							<img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src={Pic5} alt="" />
							<div class="intro-text left-0 text-center bg-faded p-5 rounded">
								<h2 class="section-heading mb-4">
									<span class="section-heading-upper">TABLE TYPE</span>

								</h2>

								<div id="booking" class="section">

									<div class="section-center">
										<div class="container">
											<div class="row">
												<div class="booking-form">

													<form>


														<div class="form-group">

															<div class="form-checkbox">

																<label for="regular">
																	<input type="radio" id="regular" name="REGULAR" />
																	<span>REGULAR</span>
																</label>
																<label for="FIRE PIT">
																	<input type="radio" id="FIRE PIT" name="FIREPIT" />
																	<span>FIREPIT</span>
																</label>
															</div>
														</div>
														<div class="row">
															<div class="col-md-6">
																<div class="form-group">
																	<span class="form-label">Name</span>
																	<input class="form-control" type="text" placeholder="Bob Lee" />

																</div>
															</div>
															<div class="col-md-6">
																<div class="form-group">
																	<span class="form-label">Phone</span>
																	<input class="form-control" type="text" placeholder="(000) 000-0000" />

																</div>
															</div>
															<div class="col-md-6">
																<div class="form-group">
																	<span class="form-label">Date</span>
																	<input class="form-control" type="date" required />

																</div>
															</div>
															<div class="col-md-6">
																<div class="form-group">
																	<span class="form-label">Time</span>
																	<input class="form-control" type="time" required />

																</div>
															</div>
															<div class="col-md-3">
																<div class="form-group">
																	<span class="form-label">Party N </span>

																	<select class="form-control">

																		<option>1</option>
																		<option>2</option>
																		<option>3</option>
																		<option>4</option>
																		<option>5</option>
																		<option>6</option>
																		<option>7</option>
																		<option>8</option>
																		<option>9</option>
																		<option>10</option>
																		<option>11</option>
																		<option>12</option>
																		<option>13</option>
																		<option>14</option>
																		<option>15</option>

																	</select>
																</div>
															</div>
															<div class="col-md-6">
																<div class="form-group">

																	<input class="btn btn-primary" type="submit" value="Submit" />

																</div>
															</div>
														</div>
													</form>
												</div>


											</div>



										</div>


									</div>
								</div>
							</div>
						</div>

					</div>
				</section>

  <section class="page-section cta">
    <div class="container">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <div class="cta-inner text-center rounded">
            <h2 class="section-heading mb-4">
              <span class="section-heading-upper">Our Promise</span>
              <span class="section-heading-lower">To You</span>
            </h2>
            <p class="mb-0">We are dedicated to providing our customers with a fantastic customer service and a welcoming atmosphere!
              
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
			</div>
		)
	}
}
export default Reservation;



