/** @flow */
import React from 'react';
import { reduxForm } from 'redux-form';
import type { FormProps } from 'redux-form';

type Props = {};
function Container(props: Props) {
	return (
		<FormPage
			title={ '3' }
		/>
	);
}
			// form="formPage"
			// fields={['email']}

type FormPageProps = {
	title: string,
} & FormProps;
function FormPage(props: FormPageProps) {
	return (
		<form>
			<input { ...props.fields.email } />
		</form>
	);
}

reduxForm({})(FormPage);

