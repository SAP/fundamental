---
title: Date Picker
id: date-picker
keywords: date-picker
sidebar: left-navigation-sidebar
toc: false
permalink: components/date-picker.html
folder: components
summary:
---

The date-picker component is an opinionated composition of the `input-group`, `popover` and `calendar` components to accomplish the UI pattern for picking a date.
{: .docs-intro}
This component mostly relies on the CSS of other components and has very little CSS of its own.

<br>

## Default and Compact sizes

{% capture default-date-picker %}
<div class="fd-date-picker">
	<div class="fd-popover">
		<div class="fd-popover__control">
			<div class="fd-input-group fd-input-group--after">
				<input type="text" value="" placeholder="Pick a date">
				<span class="fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button">
				<button class="fd-popover__control fd-button--light sap-icon--calendar" aria-controls="Itcgq828" aria-expanded="false" aria-haspopup="true" aria-hidden="true"></button>
				</span>
			</div>
		</div>
		<div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="true" id="Itcgq828">
			<div class="fd-calendar">
				<header class="fd-calendar__header">
				<div class="fd-calendar__navigation">
					<div class="fd-calendar__action">
						<button class=" fd-button--light fd-button--standard  sap-icon--slim-arrow-left" aria-label="Previous" aria-disabled="true"></button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button--light fd-button--compact" aria-selected="false" aria-expanded="false" aria-controls="mGTGe998">September</button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button--light fd-button--compact" aria-selected="false" aria-expanded="false" aria-controls="D8NDL125">2018</button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button--light fd-button--standard  sap-icon--slim-arrow-right" aria-label="Next"></button>
					</div>
				</div>
				</header>
				<div class="fd-calendar__content">
					<div class="fd-calendar__dates" id="YeayX297" aria-hidden="false">
						<table class="fd-calendar__table" role="grid">
						<thead class="fd-calendar__group">
						<tr class="fd-calendar__row">
							<th class="fd-calendar__column-header">
								<span class="fd-calendar__day-of-week">S</span>
							</th>
							<th class="fd-calendar__column-header">
								<span class="fd-calendar__day-of-week">M</span>
							</th>
							<th class="fd-calendar__column-header">
								<span class="fd-calendar__day-of-week">T</span>
							</th>
							<th class="fd-calendar__column-header">
								<span class="fd-calendar__day-of-week">W</span>
							</th>
							<th class="fd-calendar__column-header">
								<span class="fd-calendar__day-of-week">T</span>
							</th>
							<th class="fd-calendar__column-header">
								<span class="fd-calendar__day-of-week">F</span>
							</th>
							<th class="fd-calendar__column-header">
								<span class="fd-calendar__day-of-week">S</span>
							</th>
						</tr>
						</thead>
						<tbody class="fd-calendar__group">
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
								<span class="fd-calendar__text">29</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
								<span class="fd-calendar__text">30</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
								<span class="fd-calendar__text">31</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">1</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">2</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">3</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">4</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">5</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--current" role="gridcell">
								<span class="fd-calendar__text">6</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">7</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">8</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">9</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">10</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">11</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">12</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">13</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">14</span>
							</td>
							<td class="fd-calendar__item is-selected" role="gridcell">
								<span class="fd-calendar__text">15</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">16</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">17</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">18</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">19</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">20</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">21</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">22</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">23</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">24</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">25</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item is-blocked" role="gridcell">
								<span class="fd-calendar__text">26</span>
							</td>
							<td class="fd-calendar__item is-blocked" role="gridcell">
								<span class="fd-calendar__text">27</span>
							</td>
							<td class="fd-calendar__item is-blocked" role="gridcell">
								<span class="fd-calendar__text">28</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">29</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">30</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
								<span class="fd-calendar__text">1</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
								<span class="fd-calendar__text">2</span>
							</td>
						</tr>
						</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<br>

<div class="fd-date-picker">
	<div class="fd-popover">
		<div class="fd-popover__control">
			<div class="fd-input-group fd-input-group--after fd-input-group--compact">
				<input type="text" value="" placeholder="Pick a date" class="fd-input fd-input--compact">
				<span class="fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button">
				<button class="fd-popover__control fd-button--light sap-icon--calendar" aria-controls="Itcgq82" aria-expanded="false" aria-haspopup="true" aria-hidden="true"></button>
				</span>
			</div>
		</div>
		<div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="true" id="Itcgq82">
			<div class="fd-calendar">
				<header class="fd-calendar__header">
				<div class="fd-calendar__navigation">
					<div class="fd-calendar__action">
						<button class=" fd-button--light fd-button--standard  sap-icon--slim-arrow-left" aria-label="Previous" aria-disabled="true"></button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button--light fd-button--compact" aria-selected="false" aria-expanded="false" aria-controls="mGTGe998">September</button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button--light fd-button--compact" aria-selected="false" aria-expanded="false" aria-controls="D8NDL125">2018</button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button--light fd-button--standard  sap-icon--slim-arrow-right" aria-label="Next"></button>
					</div>
				</div>
				</header>
				<div class="fd-calendar__content">
					<div class="fd-calendar__dates" id="YeayX297" aria-hidden="false">
						<table class="fd-calendar__table" role="grid">
						<thead class="fd-calendar__group">
						<tr class="fd-calendar__row">
							<th class="fd-calendar__column-header">
								<span class="fd-calendar__day-of-week">S</span>
							</th>
							<th class="fd-calendar__column-header">
								<span class="fd-calendar__day-of-week">M</span>
							</th>
							<th class="fd-calendar__column-header">
								<span class="fd-calendar__day-of-week">T</span>
							</th>
							<th class="fd-calendar__column-header">
								<span class="fd-calendar__day-of-week">W</span>
							</th>
							<th class="fd-calendar__column-header">
								<span class="fd-calendar__day-of-week">T</span>
							</th>
							<th class="fd-calendar__column-header">
								<span class="fd-calendar__day-of-week">F</span>
							</th>
							<th class="fd-calendar__column-header">
								<span class="fd-calendar__day-of-week">S</span>
							</th>
						</tr>
						</thead>
						<tbody class="fd-calendar__group">
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
								<span class="fd-calendar__text">29</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
								<span class="fd-calendar__text">30</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
								<span class="fd-calendar__text">31</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">1</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">2</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">3</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">4</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">5</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--current" role="gridcell">
								<span class="fd-calendar__text">6</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">7</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">8</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">9</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">10</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">11</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">12</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">13</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">14</span>
							</td>
							<td class="fd-calendar__item is-selected" role="gridcell">
								<span class="fd-calendar__text">15</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">16</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">17</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">18</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">19</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">20</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">21</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">22</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">23</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">24</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">25</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item is-blocked" role="gridcell">
								<span class="fd-calendar__text">26</span>
							</td>
							<td class="fd-calendar__item is-blocked" role="gridcell">
								<span class="fd-calendar__text">27</span>
							</td>
							<td class="fd-calendar__item is-blocked" role="gridcell">
								<span class="fd-calendar__text">28</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">29</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">30</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
								<span class="fd-calendar__text">1</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
								<span class="fd-calendar__text">2</span>
							</td>
						</tr>
						</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
{% endcapture %}

{% include display-component.html component=default-date-picker %}
