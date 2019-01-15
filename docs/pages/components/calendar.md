---
title: Calendar
id: calendar
keywords: calendar
sidebar: left-navigation-sidebar
toc: false
permalink: components/calendar.html
folder: components
summary:
---

Commonly used as the contents of a popover when composing `date-picker`, rarely used on its own as a standalone component.
{: .docs-intro}
The `.fd-calendar__item` container takes the majority of styling. The rest of the markup provides the structure and layout.
Classes available for `.fd-calendar__item`. All are available to dates, months, and years.

<br>

## Modifiers
These are static classes set at load time, not affected by any user selections in the calendar itself

<table class="docs-table fd-calendar">
    <tbody>
        <tr>
            <td>
                <code>.fd-calendar__item</code>
            </td>
            <td>
                Base class defaulted to an interactive element
            </td>
            <td>
                <div class="fd-calendar__item">20</div>
            </td>
        </tr>
        <tr>
            <td>
                <code>.fd-calendar__item--other-month</code>
            </td>
            <td>
                Apply to dates outside the current month
            </td>
            <td>
                <div class="fd-calendar__item fd-calendar__item--other-month">20</div>
            </td>
        </tr>
        <tr>
            <td>
                <code>.fd-calendar__item--current</code>
            </td>
            <td>
                Apply to the current today, this month, this year
            </td>
            <td>
                <div class="fd-calendar__item fd-calendar__item--current">20</div>
            </td>
        </tr>
        <tr>
            <td>
                <code>.fd-calendar__item--disabled</code>
            </td>
            <td>
                Cannot be selected, usually applied to a large range of past or future dates
            </td>
            <td>
                <div class="fd-calendar__item fd-calendar__item--disabled">20</div>
            </td>
        </tr>
        <tr>
            <td>
                <code>.fd-calendar__item--blocked</code>
            </td>
            <td>
                Cannot be selected, usually applied to blackout or booked dates mixed in with available dates
            </td>
            <td>
                <div class="fd-calendar__item fd-calendar__item--blocked">20</div>
            </td>
        </tr>
    </tbody>
</table>
<br>

## States
These are dynamic classes which are affected by user selections

<table class="docs-table fd-calendar">
    <tbody>
        <tr>
            <td>
                <code>.is-disabled</code>
            </td>
            <td>
                (redundant) Cannot be selected, usually applied to a large range of past or future dates
            </td>
            <td>
                <div class="fd-calendar__item is-disabled">
                    20
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <code>.is-blocked</code>
            </td>
            <td>
                (redundant) Cannot be selected, usually applied to blackout or booked dates mixed in with available dates
            </td>
            <td>
                <div class="fd-calendar__item is-blocked">
                    20
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <code>.is-selected</code>
            </td>
            <td>
                Currently selected date AND the first and last dates in a range
            </td>
            <td>
                <div class="fd-calendar__item is-selected">
                    20
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <code>.is-selected-range</code>
            </td>
            <td>
                A date in the range between the first and last selected dates
            </td>
            <td>
                <div class="fd-calendar__item is-selected-range">
                    20
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <code>.is-selected-range-first</code>*
            </td>
            <td>
                The first date in a selected range
            </td>
            <td>
                <div class="fd-calendar__item is-selected is-selected-range-first">
                    20
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <code>.is-selected-range-last</code>*
            </td>
            <td>
                The last date in a selected range
            </td>
            <td>
                <div class="fd-calendar__item is-selected is-selected-range-last">
                    20
                </div>
            </td>
        </tr>
    </tbody>
    <tfoot>
        <td colspan="3">
            <small>* These are <code>-first</code> and <code>-last</code> classes are only necessary to adjust the border radius.</small>
        </td>
    </tfoot>
</table>
<br>

## Example: Dates, Months, Years

{% capture default-calendar-dates-months-years %}
<div class="fd-calendar">
	<header class="fd-calendar__header">
	<div class="fd-calendar__navigation">
		<div class="fd-calendar__action">
			<button class="fd-button--standard fd-button--light fd-button--compact sap-icon--slim-arrow-left" aria-label="Previous" aria-disabled="false"></button>
		</div>
		<div class="fd-calendar__action">
  			<button class="fd-button--light fd-button--compact" aria-selected="false" aria-expanded="false" aria-controls="crM8l491">February</button>
		</div>
		<div class="fd-calendar__action">
			<button class="fd-button--light fd-button--compact" aria-selected="false" aria-expanded="false" aria-controls="FTXrD591">2018</button>
		</div>
		<div class="fd-calendar__action">
			<button class="fd-button--standard fd-button--light fd-button--compact sap-icon--slim-arrow-right" aria-label="Next"></button>
		</div>
	</div>
	</header>
	<div class="fd-calendar__content">
		<div class="fd-calendar__dates" id="XVXTR263" aria-hidden="false">
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
				<td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
					<span class="fd-calendar__text">30</span>
				</td>
				<td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
					<span class="fd-calendar__text">31</span>
				</td>
				<td class="fd-calendar__item" role="gridcell">
					<span class="fd-calendar__text">1</span>
				</td>
				<td class="fd-calendar__item" role="gridcell">
					<span class="fd-calendar__text">2</span>
				</td>
				<td class="fd-calendar__item" role="gridcell">
					<span class="fd-calendar__text">3</span>
				</td>
				<td class="fd-calendar__item" role="gridcell">
					<span class="fd-calendar__text">4</span>
				</td>
				<td class="fd-calendar__item is-selected is-selected-range-first" role="gridcell">
					<span class="fd-calendar__text">5</span>
				</td>
			</tr>
			<tr class="fd-calendar__row">
				<td class="fd-calendar__item is-selected-range" role="gridcell">
					<span class="fd-calendar__text">6</span>
				</td>
				<td class="fd-calendar__item is-selected-range" role="gridcell">
					<span class="fd-calendar__text">7</span>
				</td>
				<td class="fd-calendar__item is-selected-range" role="gridcell">
					<span class="fd-calendar__text">8</span>
				</td>
				<td class="fd-calendar__item is-selected-range" role="gridcell">
					<span class="fd-calendar__text">9</span>
				</td>
				<td class="fd-calendar__item is-selected-range" role="gridcell">
					<span class="fd-calendar__text">10</span>
				</td>
				<td class="fd-calendar__item is-selected-range" role="gridcell">
					<span class="fd-calendar__text">11</span>
				</td>
				<td class="fd-calendar__item is-selected-range" role="gridcell">
					<span class="fd-calendar__text">12</span>
				</td>
			</tr>
			<tr class="fd-calendar__row">
				<td class="fd-calendar__item is-selected-range" role="gridcell">
					<span class="fd-calendar__text">13</span>
				</td>
				<td class="fd-calendar__item is-selected-range" role="gridcell">
					<span class="fd-calendar__text">14</span>
				</td>
				<td class="fd-calendar__item is-selected-range" role="gridcell">
					<span class="fd-calendar__text">15</span>
				</td>
				<td class="fd-calendar__item is-selected-range" role="gridcell">
					<span class="fd-calendar__text">16</span>
				</td>
				<td class="fd-calendar__item is-selected-range" role="gridcell">
					<span class="fd-calendar__text">17</span>
				</td>
				<td class="fd-calendar__item is-selected-range" role="gridcell">
					<span class="fd-calendar__text">18</span>
				</td>
				<td class="fd-calendar__item fd-calendar__item--current is-selected-range" role="gridcell">
					<span class="fd-calendar__text">19</span>
				</td>
			</tr>
			<tr class="fd-calendar__row">
				<td class="fd-calendar__item is-selected is-selected-range-last" role="gridcell">
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
				<td class="fd-calendar__item is-blocked" role="gridcell">
					<span class="fd-calendar__text">24</span>
				</td>
				<td class="fd-calendar__item is-blocked" role="gridcell">
					<span class="fd-calendar__text">25</span>
				</td>
				<td class="fd-calendar__item is-blocked" role="gridcell">
					<span class="fd-calendar__text">26</span>
				</td>
			</tr>
			<tr class="fd-calendar__row">
				<td class="fd-calendar__item is-blocked" role="gridcell">
					<span class="fd-calendar__text">27</span>
				</td>
				<td class="fd-calendar__item is-blocked" role="gridcell">
					<span class="fd-calendar__text">28</span>
				</td>
				<td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
					<span class="fd-calendar__text">1</span>
				</td>
				<td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
					<span class="fd-calendar__text">2</span>
				</td>
				<td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
					<span class="fd-calendar__text">3</span>
				</td>
				<td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
					<span class="fd-calendar__text">4</span>
				</td>
				<td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
					<span class="fd-calendar__text">5</span>
				</td>
			</tr>
			</tbody>
			</table>
		</div>
		<div class="fd-calendar__months" id="crM8l491" aria-hidden="true">
			<ul class="fd-calendar__list">
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">Jan.</span></li>
				<li class="fd-calendar__item fd-calendar__item--current">
				<span class="fd-calendar__text">Feb.</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">Mar.</span></li>
				<li class="fd-calendar__item is-selected">
				<span class="fd-calendar__text">Apr.</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">May</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">Jun.</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">Jul.</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">Aug.</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">Sep.</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">Oct.</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">Nov.</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">Dec.</span></li>
			</ul>
		</div>
		<div class="fd-calendar__years" aria-hidden="true" id="FTXrD591">
			<ul class="fd-calendar__list">
				<li class="fd-calendar__item fd-calendar__item--current">
				<span class="fd-calendar__text">2018</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">2019</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">2020</span></li>
				<li class="fd-calendar__item is-selected">
				<span class="fd-calendar__text">2021</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">2022</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">2023</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">2024</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">2025</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">2026</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">2027</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">2028</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">2029</span></li>
			</ul>
		</div>
	</div>
</div>
{% endcapture %}
{% include display-component.html component=default-calendar-dates-months-years %}

## Example: Dates
The previous and next controls are standard buttons with all available states. For example, add disabled or <code>aria-disabled="true"</code> to gray out the previous button when past dates are not allowed.

{% capture default-calendar-dates %}
<div class="fd-calendar">
	<header class="fd-calendar__header">
	<div class="fd-calendar__navigation">
		<div class="fd-calendar__action">
			<button class="fd-button--standard fd-button--light fd-button--compact sap-icon--slim-arrow-left" aria-label="Previous" aria-disabled="true"></button>
		</div>
		<div class="fd-calendar__action">
			<button class="fd-button--light fd-button--compact" aria-selected="false" aria-expanded="false" aria-controls="xB1D3835">September</button>
		</div>
		<div class="fd-calendar__action">
			<button class="fd-button--light fd-button--compact" aria-selected="false" aria-expanded="false" aria-controls="8bZhe525">2018</button>
		</div>
		<div class="fd-calendar__action">
			<button class="fd-button--standard fd-button--light fd-button--compact sap-icon--slim-arrow-right" aria-label="Next"></button>
		</div>
	</div>
	</header>
	<div class="fd-calendar__content">
		<div class="fd-calendar__dates" id="TgBx9346" aria-hidden="false">
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
{% endcapture %}
{% include display-component.html component=default-calendar-dates %}

## Example: Months

{% capture default-calendar-months %}
<div class="fd-calendar">
	<header class="fd-calendar__header">
	<div class="fd-calendar__navigation">
		<div class="fd-calendar__action">
			<button class="fd-button--standard fd-button--light fd-button--compact sap-icon--slim-arrow-left" aria-label="Previous" aria-disabled="undefined"></button>
		</div>
		<div class="fd-calendar__action">
			<button class="fd-button--light fd-button--compact" aria-selected="true" aria-expanded="true" aria-controls="Eo94h672">January</button>
		</div>
		<div class="fd-calendar__action">
			<button class="fd-button--light fd-button--compact" aria-selected="false" aria-expanded="false" aria-controls="GMnxs122">2018</button>
		</div>
		<div class="fd-calendar__action">
			<button class="fd-button--standard fd-button--light fd-button--compact sap-icon--slim-arrow-right" aria-label="Next"></button>
		</div>
	</div>
	</header>
	<div class="fd-calendar__content">
		<div class="fd-calendar__months" id="Eo94h672" aria-hidden="false">
			<ul class="fd-calendar__list">
				<li class="fd-calendar__item fd-calendar__item--current">
				<span class="fd-calendar__text">Jan.</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">Feb.</span></li>
				<li class="fd-calendar__item is-selected">
				<span class="fd-calendar__text">Mar.</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">Apr.</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">May</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">Jun.</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">Jul.</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">Aug.</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">Sep.</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">Oct.</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">Nov.</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">Dec.</span></li>
			</ul>
		</div>
	</div>
</div>
{% endcapture %}
{% include display-component.html component=default-calendar-months %}

## Example: Years

{% capture default-calendar-years %}
<div class="fd-calendar">
	<header class="fd-calendar__header">
	<div class="fd-calendar__navigation">
		<div class="fd-calendar__action">
			<button class="fd-button--standard fd-button--light fd-button--compact sap-icon--slim-arrow-left" aria-label="Previous" aria-disabled="undefined"></button>
		</div>
		<div class="fd-calendar__action">
			<button class="fd-button--light fd-button--compact" aria-selected="false" aria-expanded="false" aria-controls="fm3cr569">January</button>
		</div>
		<div class="fd-calendar__action">
			<button class="fd-button--light fd-button--compact" aria-selected="true" aria-expanded="true" aria-controls="bufLe361">2018</button>
		</div>
		<div class="fd-calendar__action">
			<button class="fd-button--standard fd-button--light fd-button--compact sap-icon--slim-arrow-right" aria-label="Next"></button>
		</div>
	</div>
	</header>
	<div class="fd-calendar__content">
		<div class="fd-calendar__years" aria-hidden="false" id="bufLe361">
			<ul class="fd-calendar__list">
				<li class="fd-calendar__item fd-calendar__item--current">
				<span class="fd-calendar__text">2018</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">2019</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">2020</span></li>
				<li class="fd-calendar__item is-selected">
				<span class="fd-calendar__text">2021</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">2022</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">2023</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">2024</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">2025</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">2026</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">2027</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">2028</span></li>
				<li class="fd-calendar__item">
				<span class="fd-calendar__text">2029</span></li>
			</ul>
		</div>
	</div>
</div>
{% endcapture %}
{% include display-component.html component=default-calendar-years %}
