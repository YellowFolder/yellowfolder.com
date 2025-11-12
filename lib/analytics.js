/**
 * Google Analytics 4 Event Tracking Utility
 *
 * Provides helper functions to track custom events in GA4
 */

/**
 * Send a custom event to GA4
 * @param {string} eventName - The name of the event (e.g., 'form_submit')
 * @param {object} eventParams - Additional parameters for the event
 */
export const trackEvent = (eventName, eventParams = {}) => {
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('event', eventName, eventParams);
		console.log(`GA4 Event: ${eventName}`, eventParams);
	}
};

/**
 * Track form submission events
 * @param {string} formName - The name/type of form (e.g., 'contact', 'demo', 'record_request')
 * @param {object} additionalParams - Any additional parameters
 */
export const trackFormSubmit = (formName, additionalParams = {}) => {
	trackEvent('form_submit', {
		form_name: formName,
		...additionalParams,
	});
};

/**
 * Track button/CTA clicks
 * @param {string} buttonName - The name/label of the button
 * @param {string} location - Where on the page the button is located
 */
export const trackButtonClick = (buttonName, location = '') => {
	trackEvent('button_click', {
		button_name: buttonName,
		location: location,
	});
};

/**
 * Track outbound link clicks
 * @param {string} url - The destination URL
 * @param {string} linkText - The text of the link
 */
export const trackOutboundClick = (url, linkText = '') => {
	trackEvent('outbound_click', {
		link_url: url,
		link_text: linkText,
	});
};

/**
 * Track video engagement
 * @param {string} action - The video action (e.g., 'play', 'pause', 'complete')
 * @param {string} videoTitle - The title/name of the video
 */
export const trackVideoEvent = (action, videoTitle = '') => {
	trackEvent('video_engagement', {
		video_action: action,
		video_title: videoTitle,
	});
};

/**
 * Track file downloads
 * @param {string} fileName - The name of the file being downloaded
 * @param {string} fileType - The type of file (e.g., 'pdf', 'doc')
 */
export const trackFileDownload = (fileName, fileType = '') => {
	trackEvent('file_download', {
		file_name: fileName,
		file_type: fileType,
	});
};

/**
 * Track calculator interactions
 * @param {string} action - The calculator action (e.g., 'record_series_selected', 'calculation_completed')
 * @param {object} details - Additional details about the interaction
 */
export const trackCalculatorEvent = (action, details = {}) => {
	trackEvent('calculator_interaction', {
		calculator_action: action,
		...details,
	});
};
