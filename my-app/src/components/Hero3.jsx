import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div dir="rtl" className=" my-10">
      <div className="container mx-auto">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography component="span">
              آیا میتوان با وجود مصدومیت نیز از برنامه های شما استفاده کرد؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              بله. تعدادی زیادی از متقاضیان گاها با مشکل ها یا درد هایی در نواحی
              مختلف بدن از جمله شانه, زانو و یا کمر و … به ما رجوع میکنند. ما نه
              تنها برنامه شما را با در نظر گرفتن مصدومیت شما طراحی میکنیم, بلکه
              تمریناتی را به شما معرفی میکنیم که به رفع مصدومیت شما نیز کمک
              کنند. همچنین اگر تشخیص دهیم برای مصدومیتتان نیاز به مراجعه به پزشک
              دارید به شما کمک میکنیم تا مرکز درمانی مناسبی در اطراف محل زندگی
              خود پیدا کنید.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography component="span">
              چقد زمان میبرد تا نتیجه بگیرم؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              این که چه زمانی نتایج زحماتتان را ببینید کاملا به شما بستگی دارد.
              به اینکه اهداف شما چیست, سبک زندگی شما هم اکنون چگونه است, و اینکه
              چه میزان نیاز به کار داریم. بنابراین اگر به دنبال راهی هستید که با
              استفاده آن به سرعت چربی بسوزانید و بلافاصله یک شکم شش تکه نیز
              داشته باشید, برنامه های ما مناسب تقاضای شما نیستند. تمرکز ما به
              روی موفقیت شماست و هدف ما این است که هم در کوتاه مدت و هم در بلند
              مدت به شما کمک کنیم. و این به معنی نتایج ماندگار است. به همین دلیل
              پاسخ دقیق به این سوال ممکن نیست. اما پاسخی که میتوانیم با اطمینان
              و قاطعیت مطرح کنیم این است: اگر پیشنهادات مربی خود را به بهترین
              شکل ممکن عملی کنید, با دکتر بدن (Born Fitness) نتایج مورد نظر خود
              را کسب خواهید کرد. ما این موضوع را تضمین میکنیم. 95 درصد از
              مشتریان ما به اهداف خود دست پیدا کرده اند.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography component="span">
              چه چیزی مربیگری دکتر بدن را متمایز میسازد؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              اکثر برنامه های مربیگری آنلاین (و بسیاری از کارشناسان حوزه تناسب
              اندام) از قالب های آماده و عمومی استفاده میکنند. این بدان معناست
              که یک برنامه خاص را بدون در نظر گفتن سن مخاطب, اهداف و تجربیاتش در
              اختیار همه قرار میدهند. در دکتر بدن همه چیز از جمله برنامه غذایی و
              برنامه ورزشی مخاطبین ما, با توجه به جزئیات سبک زندگی, برنامه
              روزانه و علایق آنها به صورت منحصر بفرد شخصی سازی شده است. به همین
              دلیل است که هر سال تعداد محدودی از متقاضیان را پذیرش میکنیم.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
