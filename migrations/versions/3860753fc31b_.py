"""empty message

Revision ID: 3860753fc31b
Revises: 0a4dee8658ea
Create Date: 2021-08-25 14:27:42.586921

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3860753fc31b'
down_revision = '0a4dee8658ea'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('quiz_templates', sa.Column('is_private', sa.Boolean(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('quiz_templates', 'is_private')
    # ### end Alembic commands ###
