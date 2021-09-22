from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, Field
from wtforms.validators import DataRequired, ValidationError, Length
from form_utils import directory_belongs_to_user_and_exists, user_id_belongs_to_user


class ListField(Field):
    # generate your own datafield
    def process_formdata(self, valuelist):
        self.data = valuelist


class QuizTemplateForm(FlaskForm):
    title = StringField(validators=[DataRequired(), Length(max=255)])
    description = StringField(validators=[Length(max=1000)])

    user_id = IntegerField(
        validators=[DataRequired(), user_id_belongs_to_user])

    is_private = ListField(
        validators=[DataRequired()])

    quiz_directory_id = IntegerField(
        validators=[directory_belongs_to_user_and_exists])

    # add categories in the future
