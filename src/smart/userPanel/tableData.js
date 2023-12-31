import { Button } from "antd";

export const serviceColums = (navigate, type) => {
  return [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "20%",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Area",
      dataIndex: "area",
      key: "area",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Post Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "View",
      dataIndex: "view",
      key: "view",
      render: (
        item,
        record //navigate(`/admin-approve-post/${item._id}`)
      ) => (
        <Button onClick={() => navigate(`/post-details/${type}/${record.id}`)}>
          View
        </Button>
      ),
    },
  ];
};

export const serviceRequestColums = (navigate) => {
  return [
    {
      title: "By",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "20%",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Area",
      dataIndex: "area",
      key: "area",
    },
    {
      title: "Post Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "View",
      dataIndex: "view",
      key: "view",
      render: (item, record) => (
        <Button
          onClick={() =>
            navigate(`/post-details/${record.serviceType}/${record.id}`)
          }
        >
          View
        </Button>
      ),
    },
  ];
};
export const projectColums = (navigate) => {
  return [
    {
      title: "Freelancer name",
      dataIndex: "freelancerName",
      key: "freelancerName",
    },
    {
      title: "Seeker name",
      dataIndex: "seekerName",
      key: "seekerName",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "20%",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "View",
      dataIndex: "view",
      key: "view",
      render: (item, record) => (
        <Button onClick={() => navigate(`/landing-project-page/${record.id}`)}>
          View
        </Button>
      ),
    },
  ];
};

export const transactionColums = (navigate) => {
  return [
    {
      title: "Project title",
      dataIndex: "projectTitle",
      key: "projectTitle",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Seeker paid to the system",
      dataIndex: "isPaidBySeeker",
      key: "isPaidBySeeker",
    },
    {
      title: "Paid to Freelancer",
      dataIndex: "isPaidToFreelancer",
      key: "isPaidToFreelancer",
    },
    {
      title: "Seeker paid Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Paid to Freelancer date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];
};
