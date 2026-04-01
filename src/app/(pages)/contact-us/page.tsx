 
"use client";

import React, { useState } from "react";
import { PageTitleHeader, PageSection, PageSectionHeader } from "@pixelated-tech/components";
import { FormEngine } from "@pixelated-tech/components";
import { emailFormData } from "@pixelated-tech/components";
import { Loading, ToggleLoading } from "@pixelated-tech/components";
import { Modal, handleModalOpen } from "@pixelated-tech/components";
import formData from "@/app/data/contactform.json";
import routes from "@/app/data/routes.json";
const siteInfo = (routes as any).siteInfo;


export default function ContactUsPage() {

	const myContent = <div className="centered"><br /><br />Thank you for contacting us!<br />We will get back to you as soon as we can.<br /><br /><br /></div>;

	const [modalContent /*, setModalContent */ ] = useState<NonNullable<React.ReactNode>>(myContent);
	
	function handleSubmit(e: Event) {
		ToggleLoading({show: true});
		emailFormData(e, postSubmit);
	}

	function postSubmit(e: Event) {
		handleModalOpen(e as MouseEvent);
		ToggleLoading({show: false});
		const myForm = e.target as HTMLFormElement;
		myForm.reset();
	}
	
	return (
		<>
			<Loading />
			<Modal modalContent={modalContent} />

			<PageTitleHeader title="Contact Manning Metalworks" />

			<PageSection columns={1} maxWidth="1024px" padding="20px" id="contact-info-section">
				<PageSectionHeader title="Contact Information" />
				<div style={{ margin: '0 auto' }}>
					<h3>Address:</h3>
					<p>
						<a href={`https://maps.app.goo.gl/${siteInfo.address.mapLink}`} target="_blank" rel="noopener noreferrer">
							{siteInfo.address.streetAddress}, {siteInfo.address.addressLocality}, {siteInfo.address.addressRegion} {siteInfo.address.postalCode}
						</a>
					</p>
					<h3>Email:</h3>
					<p><a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></p>
					<h3>Phone:</h3>
					<p><a href={`tel:${siteInfo.telephone}`}>{siteInfo.telephone}</a></p>
				</div>
			</PageSection>

			<PageSection columns={1} maxWidth="1024px" padding="20px" id="contact-us-section">
				<PageSectionHeader title="Contact Us" />
				<div style={{ margin: '0 auto', border: '2px solid var(--accent1-color)', padding: '20px', borderRadius: '20px' }}>
					<FormEngine 
						name="contact-us" 
						id="contact-us-form" 
						formData={formData as any} 
						onSubmitHandler={handleSubmit} 
					/>
				</div>
			</PageSection>

		</>
	);
}
