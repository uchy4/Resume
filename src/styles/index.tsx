import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	.container {
		padding-top: 2rem;
		padding-bottom: 2rem;
		:first-child {
			width: 890px;
		}
	}
	.print {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
	}
`;

export const WhiteDivider = styled.div`
	border-top: 1px solid white;
	margin: 0;
	padding: 0;
`;
export const BlackDivider = styled(WhiteDivider)`
	border-color: #333;
`;

export const List = styled.ul`
    list-style-type: disc;
    margin-top: .25rem;
    margin-bottom: .5rem;
    li {
        margin-top: .25rem;
        margin-left: -1.5rem;
		font-family: "Droid Sans", "Trebuchet MS", sans-serif;
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1.3;
        letter-spacing: 0.03em;
        /* :before {
            content: "🔸"; 
            padding-right: 4px;
            margin-left: -18px;
        } */
    }
`;

export const SharedChipStyle = css`
	font-size: 14px;
	color: #222;
	font-weight: bold;
	font-family: "Consolas" !important;
	border-width: 2px;
`;

export const PrintArea = styled.div`
	display: flex;
	justify-content: space-evenly;
	height: 1056px;
	width: 816px;
	padding: 0.85rem;
	background-color: #fff;
	border-radius: 0.25rem;

	.aside {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		background-color: #333;
		color: #fff;
		padding: none;
		max-width: 37%;
		
		background: radial-gradient(#333 12%, transparent 20% ),radial-gradient(#333 12%, transparent 20% );
		background-color: #111;
		background-position: 0 0, 50px 50px;
		background-size: 20px 20px;

		.div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
			width:90%;
			height:100%;
			padding: 1rem;
			background: linear-gradient( to right, rgba(0, 0, 0, 0), rgba( 0, 0, 0, .7 ) ),linear-gradient( to top, rgba(0, 0, 0, 0), rgba( 0, 0, 0, .7 ) );
		}
	}

    .note {
        font-family: 'Just Another Hand', Arial, Helvetica, sans-serif, sans-serif;
        font-size: 1.5rem;
        color: #c53030;
        line-height: 1.5rem;
        margin-top: 2rem;
        transform: rotate(-15deg);
    }

	.body {
		flex: 1 1 auto;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		margin-left: .75rem;
		.section {
			padding: 0.25rem;
            padding-top: 0;
		}
		
		background: radial-gradient(#eaeaea 12%, transparent 20% ),radial-gradient(#eaeaea 12%, transparent 20% );
		background-color: #fff;
		background-position: 0 0, 50px 50px;
		background-size: 20px 20px;

		.div {
			width:100%;
			height:100%;
			background: linear-gradient( to left, rgba(255, 255, 255, 0), rgba( 255, 255, 255, .8 ) ),
            linear-gradient( to top, rgba(255, 255, 255, 0), rgba( 255, 255, 255, .8 ) ),
            linear-gradient( to top, rgba(255, 255, 255, 0), rgba( 255, 255, 255, .8 ));
		}
	}

	.section {
		justify-content: flex-start;
		/* padding: 0.25rem; */
	}
	.chip {
		display: flex;
		flex-wrap: wrap;
		font-family: "Consolas" !important;
		padding: 0.25rem;
		justify-content: center;
		.green {
			background-image: linear-gradient(to right, whitesmoke, #f8d71c , goldenrod);
			${SharedChipStyle}
			div {
				background-color: #f8d71c;
				${SharedChipStyle}
			}
		}
		.blue {
			background-image: linear-gradient(to right, whitesmoke, #60adf5, #1551b0);
			${SharedChipStyle}
			div {
				background-color: #60adf5;
				${SharedChipStyle}
			}
		}
		.red {
			background-image: linear-gradient(to right, whitesmoke, #ff797f , indianred);
			${SharedChipStyle}
			div {
				background-color: #ff797f;
				${SharedChipStyle}
			}
		}
		.MuiChip-label {
			font-weight: 500;
			font-family: "Consolas" !important;
		}
	}
	.center {
		text-align: center;
	}
	.title {
		color: #86accf;
		font-family: "Droid Sans", "Trebuchet MS", sans-serif;
		/* text-shadow: 2px 2px #144055; */
	}
	.blue2 {
		color: #1f66a8;
		display: flex;
        justify-content: center;
        font-style: italic;
	}
	.orange {
		color: #c4876a;
		font-style: italic;
		text-align: center;
	}
	.subtitle {
        margin: 0;
        /* padding-top: .25rem; */
		display: flex;
		align-content: top;
		font-family: "Droid Sans", "Trebuchet MS", sans-serif;
		width: 100%;
        /* line-height: 1; */
        /* align-self: baseline; */
        justify-content: space-between;
	}
    .secondary {
        margin-top: -2px;
        color: #666;
        font-style: italic;
        font-weight: 600;
    }
	.MuiTypography-body1 > pre {
		overflow: hidden !important;
		border-radius: 0.25rem;
		white-space: pre-wrap;
	}
	.options {
		margin-left: auto;
		display: flex;
		align-items: center;
		@media print {
			visibility: hidden;
		}
	}
	.flex {
		display: flex;
	}
	.summary {
		/* font-size: 14px; */
		color: #ddd;
        text-align: justify;
        /* background-color: #444; */
        padding: .5rem;
        line-height: 1.3;
	}
	.icon {
		min-width: 2rem;
	}
	.no-padding {
        padding: 0;
		padding-top: .25rem;
	}
	.link {
		color: #88a9c7;
	}
    .grey {
        background-color: rgba(100,100,100,.1);
    }
`;